/*
 * 口袋精灵2 GM 面板（道具 + 宠物属性 + 存档）
 * 用法：页面右下角 GM 按钮，或快捷键 Ctrl+Shift+G 打开/关闭
 * 原理：通过 Vue 根实例拿到 Vuex store 与 webpack 配置模块（uP 道具表 / jL 经验表），
 *       道具走游戏自带 playerModule/changePackageProps，宠物直接改 petModule.totalPets，
 *       再通过 $gameLocalStorage 写回加密存档。
 */
;(function () {
  'use strict'

  var TYPE_LABELS = {
    experience: '经验', collection: '收集', pockball: '精灵球', reel: '卷轴',
    evolution: '进化', synthesis: '合成', nirvana: '涅槃', magicBook: '技能书',
    special: '特殊', goldCoinCard: '金币卡', ability: '能力', crystalCard: '水晶卡',
    treasure: '宝箱', egg: '宠物蛋', passport: '通行证', refinement: '锻造材料',
    enhancement: '强化', equipment: '装备', godlyEvolution: '神宠进化', fragment: '碎片'
  }
  var LEVEL_COLORS = {
    white: '#e6e6e6', green: '#4cd964', blue: '#4aa8ff', purple: '#c77dff',
    orange: '#ff9f1a', gold: '#ffd700', red: '#ff5a5a'
  }
  var ATTRS = ['金', '木', '水', '火', '土', '神']
  var STAT_KEYS = ['maxHp', 'maxMp', 'atk', 'def', 'spd']
  var STAT_LABELS = { maxHp: '生命', maxMp: '魔法', atk: '攻击', def: '防御', spd: '速度' }
  var BASE_STATS = { maxHp: 60, maxMp: 20, atk: 10, def: 10, spd: 10 }
  var MAX_LEVEL = 100
  var MAX_MAGIC_RANK = 10
  var LOCK_EXP = 9000000000000000

  var ctx = { vm: null, store: null, props: null, expTable: null, toggleEl: null }

  // ---------------- 存档：导出 / 导入 / 绑定固定文件 ----------------
  var SAVE_FORMAT = 'pet-atlas-game-save'
  var SAVE_KEYS = ['playerDetail', 'playerAsset', 'packageDetail', 'storeDetail', 'wornEquipments', 'totalPets', 'curPetsId', 'fightPetId', 'pastureMaxCapacity', 'acceptedMissions', 'finishedMissions', 'dungeonsDetail', 'medalProgress', 'rewardTime', 'gameVersion']
  var META_KEY = '__gm_save_sync__'
  var IDB_NAME = 'pet-atlas-gm'
  var IDB_STORE = 'kv'
  var HANDLE_KEY = 'saveFileHandle'
  var FS_SUPPORTED = typeof window.showSaveFilePicker === 'function' && typeof window.showOpenFilePicker === 'function'
  var FILE_TYPES = [{ description: '口袋精灵2 存档', accept: { 'application/json': ['.json'] } }]

  var sync = {
    state: 'none', message: '', handle: null, persisted: true, lastWrite: null,
    timer: null, dirty: false, suppress: false, frozen: false, resetPending: false,
    pendingNewBind: false, autoAuthArmed: false, changeCount: 0, chain: Promise.resolve(), listeners: []
  }

  function encodeKey(name) { return btoa(unescape(encodeURIComponent(name))) }
  function decodeKey(k) {
    try {
      var s = decodeURIComponent(escape(atob(k)))
      return /^[A-Za-z][A-Za-z0-9_]{1,40}$/.test(s) ? s : null
    } catch (e) { return null }
  }
  var KNOWN_RAW = {}
  SAVE_KEYS.forEach(function (n) { KNOWN_RAW[encodeKey(n)] = n })
  var PLAYER_RAW = encodeKey('playerDetail')
  var keyCache = {}
  // 游戏存档键 = Base64(键名)，值为 AES 密文；未知键名用游戏自带解密验证一次再缓存
  function isGameKey(k) {
    if (KNOWN_RAW[k]) return true
    if (Object.prototype.hasOwnProperty.call(keyCache, k)) return keyCache[k]
    var name = decodeKey(k)
    if (!name) { keyCache[k] = false; return false }
    if (!ctx.vm) return false
    var ok = false
    try { var v = ctx.vm.$gameLocalStorage.getItem(name); ok = v !== null && v !== undefined && v !== '' } catch (e) {}
    keyCache[k] = ok
    return ok
  }

  // 拦截 localStorage 写入：游戏存档一变化就安排写文件
  var rawSetItem = Storage.prototype.setItem
  var rawRemoveItem = Storage.prototype.removeItem
  var rawClear = Storage.prototype.clear
  function isLS(s) { try { return s === window.localStorage } catch (e) { return false } }
  Storage.prototype.setItem = function (k, v) {
    var game = isLS(this) && isGameKey(String(k))
    if (game && sync.frozen) return
    rawSetItem.call(this, k, v)
    if (game && !sync.suppress) { sync.changeCount++; scheduleWrite() }
  }
  Storage.prototype.removeItem = function (k) {
    var game = isLS(this) && isGameKey(String(k))
    if (game && sync.frozen) return
    rawRemoveItem.call(this, k)
    if (game && !sync.suppress) { sync.changeCount++; scheduleWrite() }
  }
  Storage.prototype.clear = function () {
    var ls = isLS(this)
    if (ls && sync.frozen) return
    rawClear.call(this)
    if (ls && !sync.suppress) { sync.resetPending = true; sync.changeCount++ }
  }

  function readMeta() { try { return JSON.parse(window.localStorage.getItem(META_KEY)) || {} } catch (e) { return {} } }
  function writeMeta(m) { try { rawSetItem.call(window.localStorage, META_KEY, JSON.stringify(m)) } catch (e) {} }
  function fmtTime(iso) { var d = new Date(iso); return isNaN(d) ? '未知' : d.toLocaleString('zh-CN', { hour12: false }) }
  function stamp() {
    var d = new Date()
    function p(n) { return (n < 10 ? '0' : '') + n }
    return d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '-' + p(d.getHours()) + p(d.getMinutes()) + p(d.getSeconds())
  }

  function buildSummary() {
    try {
      var pm = ctx.store.state.playerModule
      var ps = ctx.store.state.petModule
      var top = ps.totalPets.slice().sort(function (a, b) { return b.level - a.level })[0]
      return {
        playerName: pm.playerName, goldCoin: pm.goldCoin, crystal: pm.crystal, prestige: pm.prestige,
        pets: ps.totalPets.length, topPet: top ? top.name + ' Lv' + top.level : '无',
        bagUsed: pm.packageDetail.packageProps.length, bagMax: pm.packageDetail.maxCapacity
      }
    } catch (e) { return null }
  }
  function summaryText(s) {
    if (!s) return '（无摘要）'
    return '玩家：' + s.playerName + '　金币 ' + s.goldCoin + '　水晶 ' + s.crystal + '　威望 ' + s.prestige +
      '\n宠物 ' + s.pets + ' 只（最高 ' + s.topPet + '）　背包 ' + s.bagUsed + ' / ' + s.bagMax
  }
  function hasPlayer(s) { return !!(s && s.data && s.data[PLAYER_RAW]) }
  function sameData(a, b) {
    var ka = Object.keys(a.data).sort()
    var kb = Object.keys(b.data).sort()
    if (ka.join('|') !== kb.join('|')) return false
    for (var i = 0; i < ka.length; i++) if (a.data[ka[i]] !== b.data[ka[i]]) return false
    return true
  }

  function collectSave() {
    var ls = window.localStorage
    var data = {}
    var names = {}
    for (var i = 0; i < ls.length; i++) {
      var k = ls.key(i)
      if (isGameKey(k)) { data[k] = ls.getItem(k); names[k] = KNOWN_RAW[k] || decodeKey(k) }
    }
    return { format: SAVE_FORMAT, version: 1, savedAt: new Date().toISOString(), summary: buildSummary(), keys: names, data: data }
  }

  // 支持本面板导出的格式，也兼容控制台 copy(JSON.stringify(localStorage)) 的整份备份
  function parseSave(text) {
    var o
    try { o = JSON.parse(text) } catch (e) { throw new Error('不是有效的 JSON 文件') }
    if (!o || typeof o !== 'object') throw new Error('文件内容不是存档')
    if (o.format === SAVE_FORMAT) {
      if (!o.data || typeof o.data !== 'object') throw new Error('存档数据缺失')
    } else if (!o.format) {
      var data = {}
      Object.keys(o).forEach(function (k) { if (typeof o[k] === 'string' && (KNOWN_RAW[k] || decodeKey(k))) data[k] = o[k] })
      o = { format: SAVE_FORMAT, version: 1, savedAt: null, summary: null, data: data, legacy: true }
    } else {
      throw new Error('不是口袋精灵2 存档文件')
    }
    var keys = Object.keys(o.data)
    if (!keys.length) throw new Error('存档里没有游戏数据')
    keys.forEach(function (k) { if (typeof o.data[k] !== 'string') throw new Error('存档数据已损坏') })
    if (!o.data[PLAYER_RAW]) throw new Error('存档里没有角色信息，无法导入')
    return o
  }

  function applySave(save, opts) {
    var ls = window.localStorage
    sync.suppress = true
    try {
      var old = []
      for (var i = 0; i < ls.length; i++) { var k = ls.key(i); if (isGameKey(k)) old.push(k) }
      old.forEach(function (k) { rawRemoveItem.call(ls, k) })
      Object.keys(save.data).forEach(function (k) { rawSetItem.call(ls, k, save.data[k]) })
      var meta = readMeta()
      meta.lastWrite = new Date().toISOString()
      writeMeta(meta)
      sync.resetPending = false
    } finally {
      sync.suppress = false
    }
    if (!opts || opts.reload !== false) {
      sync.frozen = true
      location.reload()
    }
  }

  function downloadSave() {
    var s = collectSave()
    if (!hasPlayer(s)) throw new Error('当前还没有角色存档')
    var blob = new Blob([JSON.stringify(s, null, 2)], { type: 'application/json' })
    var a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'pet-atlas-save-' + stamp() + '.json'
    document.body.appendChild(a)
    a.click()
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove() }, 2000)
    return a.download
  }

  function idbOp(mode, fn) {
    return new Promise(function (resolve, reject) {
      var req = indexedDB.open(IDB_NAME, 1)
      req.onupgradeneeded = function () { req.result.createObjectStore(IDB_STORE) }
      req.onerror = function () { reject(req.error) }
      req.onsuccess = function () {
        var db = req.result
        try {
          var tx = db.transaction(IDB_STORE, mode)
          var r = fn(tx.objectStore(IDB_STORE))
          tx.oncomplete = function () { db.close(); resolve(r && r.result) }
          tx.onerror = tx.onabort = function () { db.close(); reject(tx.error) }
        } catch (e) { db.close(); reject(e) }
      }
    })
  }
  function idbGet(k) { return idbOp('readonly', function (st) { return st.get(k) }) }
  function idbSet(k, v) { return idbOp('readwrite', function (st) { return st.put(v, k) }) }
  function idbDel(k) { return idbOp('readwrite', function (st) { return st.delete(k) }) }

  function notify() {
    sync.listeners.forEach(function (fn) { try { fn() } catch (e) {} })
    if (ctx.toggleEl) ctx.toggleEl.classList.toggle('warn', ['prompt', 'paused', 'error'].indexOf(sync.state) >= 0)
  }
  function setState(s, msg) { sync.state = s; sync.message = msg || ''; notify() }

  function scheduleWrite() {
    sync.dirty = true
    if (sync.state !== 'active') return
    clearTimeout(sync.timer)
    sync.timer = setTimeout(flushWrite, 1000)
  }
  function flushWrite() {
    clearTimeout(sync.timer)
    if (!sync.dirty || sync.state !== 'active') return
    sync.dirty = false
    writeNow(false)
  }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') flushWrite() })

  function writeNow(force) {
    sync.chain = sync.chain.then(function () { return doWrite(force) }).catch(function (e) {
      if (e && e.name === 'NotAllowedError') { setState('prompt'); armAutoAuth() }
      else setState('error', (e && e.message) || String(e))
    })
    return sync.chain
  }

  async function doWrite(force) {
    if (!sync.handle) return
    if (!force && sync.state !== 'active') return
    if (sync.resetPending) {
      if (!force && !window.confirm('检测到游戏进度被重置（新建了角色）。\n\n要用新进度覆盖存档文件「' + sync.handle.name + '」吗？\n\n确定 = 覆盖文件\n取消 = 暂停自动保存，文件保持旧进度')) {
        setState('paused')
        return
      }
      sync.resetPending = false
    }
    var s = collectSave()
    if (!hasPlayer(s)) {
      if (force) throw new Error('当前还没有角色存档，未写入')
      return
    }
    var w = await sync.handle.createWritable()
    await w.write(JSON.stringify(s, null, 2))
    await w.close()
    sync.lastWrite = s.savedAt
    var meta = readMeta()
    meta.lastWrite = s.savedAt
    meta.fileName = sync.handle.name
    writeMeta(meta)
    setState('active')
  }

  async function rememberHandle(handle) {
    sync.handle = handle
    try { await idbSet(HANDLE_KEY, handle); sync.persisted = true } catch (e) { sync.persisted = false }
  }
  async function forgetHandle() {
    clearTimeout(sync.timer)
    sync.handle = null
    sync.lastWrite = null
    try { await idbDel(HANDLE_KEY) } catch (e) {}
  }

  async function activate(handle, isNewBind) {
    sync.handle = handle
    var text = ''
    try {
      text = await (await handle.getFile()).text()
    } catch (e) {
      if (e && e.name === 'NotAllowedError') { setState('prompt'); armAutoAuth(); return }
      setState('error', '读取存档文件失败：' + (e && e.name === 'NotFoundError' ? '文件可能已被移动或删除，请重新绑定' : ((e && e.message) || e)))
      return
    }
    var fileSave = null
    var invalid = false
    if (text.trim()) { try { fileSave = parseSave(text) } catch (e) { invalid = true } }
    var local = collectSave()
    if (invalid) {
      if (!isNewBind) { setState('error', '文件内容不是有效存档，已停止写入以免覆盖'); return }
      if (!window.confirm('文件「' + handle.name + '」里不是有效的游戏存档，继续将用当前进度覆盖它，确定吗？')) {
        await forgetHandle()
        setState('none')
        return
      }
    } else if (fileSave) {
      var meta = readMeta()
      var fileTime = Date.parse(fileSave.savedAt) || 0
      var lastWrite = Date.parse(meta.lastWrite) || 0
      var askLoad = isNewBind || !hasPlayer(local) || fileTime > lastWrite + 2000
      if (askLoad && !sameData(fileSave, local)) {
        var msg = (isNewBind ? '文件「' + handle.name + '」里已经有存档。' : '存档文件「' + handle.name + '」里的进度比浏览器里的更新。') +
          '\n\n文件存档（' + (fileSave.savedAt ? fmtTime(fileSave.savedAt) : '时间未知') + '）：\n' + summaryText(fileSave.summary) +
          '\n\n当前进度：\n' + (hasPlayer(local) ? summaryText(local.summary) : '（还没有角色）') +
          '\n\n确定 = 读取文件存档（页面会刷新）\n取消 = 保留当前进度并写入文件'
        if (window.confirm(msg)) { applySave(fileSave); return }
      }
    }
    setState('active')
    await writeNow(false)
  }

  async function bindFile() {
    var handle = await window.showSaveFilePicker({ suggestedName: 'pet-atlas-save.json', types: FILE_TYPES })
    await rememberHandle(handle)
    await activate(handle, true)
  }
  async function openFile() {
    var list = await window.showOpenFilePicker({ types: FILE_TYPES, multiple: false })
    var handle = list[0]
    await rememberHandle(handle)
    var p = 'prompt'
    try { p = await handle.requestPermission({ mode: 'readwrite' }) } catch (e) {}
    if (p === 'granted') {
      await activate(handle, true)
    } else {
      sync.pendingNewBind = true
      setState('prompt')
    }
  }
  async function authorize() {
    if (!sync.handle) return
    var p = await sync.handle.requestPermission({ mode: 'readwrite' })
    if (p === 'granted') {
      var nb = sync.pendingNewBind
      sync.pendingNewBind = false
      await activate(sync.handle, nb)
    } else {
      setState('prompt')
    }
  }
  async function unbind() {
    await forgetHandle()
    setState(FS_SUPPORTED ? 'none' : 'unsupported')
  }
  // 浏览器重启后文件权限会回到“询问”，在玩家下一次点击页面时顺带请求授权
  function armAutoAuth() {
    if (sync.autoAuthArmed) return
    sync.autoAuthArmed = true
    document.addEventListener('click', function onClick(e) {
      if (sync.state !== 'prompt') { document.removeEventListener('click', onClick, true); sync.autoAuthArmed = false; return }
      if (e.target && e.target.closest && e.target.closest('#gm-panel')) return
      document.removeEventListener('click', onClick, true)
      sync.autoAuthArmed = false
      authorize().catch(function () {})
    }, true)
  }

  async function initSync() {
    if (!FS_SUPPORTED) { setState('unsupported'); return }
    var h = null
    try { h = await idbGet(HANDLE_KEY) } catch (e) {}
    if (!h) { setState('none'); return }
    sync.handle = h
    var p = 'prompt'
    try { p = await h.queryPermission({ mode: 'readwrite' }) } catch (e) {}
    if (p === 'granted') {
      await activate(h, false)
    } else {
      setState('prompt')
      armAutoAuth()
      setTimeout(function () { toast('存档文件「' + h.name + '」等待授权：点击游戏画面，在浏览器弹窗中选择“允许”') }, 1500)
    }
  }

  function findRootVm() {
    var all = document.querySelectorAll('*')
    for (var i = 0; i < all.length; i++) {
      if (all[i].__vue__) return all[i].__vue__.$root
    }
    return null
  }

  function loadConfigModule() {
    var chunk = window.webpackChunkpet_atlas_game_client
    if (!chunk) return null
    var req
    chunk.push([['__gm_panel__' + Date.now()], {}, function (r) { req = r }])
    if (!req) return null
    var ids = Object.keys(req.m)
    for (var i = 0; i < ids.length; i++) {
      var src = req.m[ids[i]].toString()
      if (!/['"]?uP['"]?\s*:\s*(\(\)\s*=>|function)/.test(src)) continue
      try {
        var ex = req(ids[i])
        if (ex && Array.isArray(ex.uP) && ex.uP.length && ex.uP[0].name && ex.uP[0].type) return ex
      } catch (e) {}
    }
    return null
  }

  function deepClone(o) { return JSON.parse(JSON.stringify(o)) }
  function toInt(v, min, max, def) {
    var n = Math.floor(Number(v))
    if (!isFinite(n)) n = def
    if (min != null) n = Math.max(min, n)
    if (max != null) n = Math.min(max, n)
    return n
  }
  function toNum(v, min, def) {
    var n = Number(v)
    if (!isFinite(n)) n = def
    if (min != null) n = Math.max(min, n)
    return Math.round(n * 100) / 100
  }

  // ---------------- 道具 ----------------
  function saveBag() {
    ctx.vm.$gameLocalStorage.setItem('packageDetail', ctx.store.state.playerModule.packageDetail)
  }

  function commitAdd(prop) {
    return new Promise(function (resolve, reject) {
      ctx.store.commit('playerModule/changePackageProps', {
        handle: 'add', props: [prop], resolve: resolve, reject: reject
      })
    })
  }

  function addProp(cfg, num) {
    num = Math.max(1, Math.floor(Number(num) || 1))
    var tasks = []
    if (cfg.type === 'equipment') {
      for (var i = 0; i < Math.min(num, 20); i++) {
        var eq = deepClone(cfg); eq.num = 1; delete eq.rand; tasks.push(eq)
      }
    } else {
      var p = deepClone(cfg); p.num = num; tasks.push(p)
    }
    var chain = Promise.resolve()
    var ok = 0
    tasks.forEach(function (t) {
      chain = chain.then(function () { return commitAdd(t).then(function () { ok++ }) })
    })
    return chain
      .then(function () {
        try { ctx.vm.$propsFunc.propRefresh([cfg.name]) } catch (e) {}
        saveBag()
        return cfg.type === 'equipment' ? ok + ' 件' : num + ' 个'
      })
      .catch(function (err) {
        if (ok > 0) saveBag()
        throw err
      })
  }

  // ---------------- 宠物 ----------------
  // 与游戏内属性公式一致：从基础值开始，按等级逐级累加，每级取整
  function calcStats(level, growth, rank, attribute) {
    var g = Math.pow(Number(growth) || 0, 0.5)
    var r = Math.pow(Number(rank) || 0, 0.5)
    function k(attr) { return attribute === attr ? 5 : (attribute === '神' ? 4 : 3) }
    var s = deepClone(BASE_STATS)
    for (var i = 0; i < level; i++) {
      s.maxHp = Math.floor(s.maxHp + 10 + g * 3 + r * k('金'))
      s.maxMp = Math.floor(s.maxMp + 5 + g + r * k('水'))
      s.atk = Math.floor(s.atk + 4 + g * 1.4 + r * k('火') * 0.35)
      s.def = Math.floor(s.def + 3 + g + r * k('土') * 0.33)
      s.spd = Math.floor(s.spd + 1.2 + g * 0.7 + r * k('木') * 0.3)
    }
    return s
  }

  function petState() { return ctx.store.state.petModule }
  function findPetIndex(id) {
    var list = petState().totalPets
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return i
    return -1
  }
  function petTag(p) {
    var s = petState()
    if (p.id === s.fightPetId) return '出战'
    if (s.curPetsId.indexOf(p.id) >= 0) return '携带'
    return '牧场'
  }
  function sortedPets() {
    var order = { '出战': 0, '携带': 1, '牧场': 2 }
    return petState().totalPets.slice().sort(function (a, b) {
      return (order[petTag(a)] - order[petTag(b)]) || (b.level - a.level)
    })
  }
  function expForLevel(level, fallback) {
    var t = ctx.expTable
    return (t && t[level - 1] != null) ? Number(t[level - 1]) : fallback
  }

  function savePet(id, patch) {
    var s = petState()
    var idx = findPetIndex(id)
    if (idx < 0) throw new Error('宠物不存在，可能已被放生')
    var pet = s.totalPets[idx]
    Object.keys(patch).forEach(function (k) { ctx.vm.$set(pet, k, patch[k]) })
    s.totalPets.splice(idx, 1, pet)
    ctx.vm.$gameLocalStorage.setItem('totalPets', s.totalPets)
    return pet
  }

  // 根据等级与锁定选项得出 maxExp / exp，避免保存后立即触发游戏的升级重算
  function resolveExp(pet, level, exp, lock) {
    var maxExp = (lock && level >= MAX_LEVEL) ? LOCK_EXP : expForLevel(level, pet.maxExp === LOCK_EXP ? 100 : pet.maxExp)
    exp = Math.min(Math.max(0, exp), Math.max(0, maxExp - 1))
    return { maxExp: maxExp, exp: exp }
  }

  function maxOutPet(id, lock) {
    var pet = petState().totalPets[findPetIndex(id)]
    if (!pet) throw new Error('宠物不存在')
    var stats = calcStats(MAX_LEVEL, 100, pet.rank, pet.attribute)
    var e = resolveExp(pet, MAX_LEVEL, 0, lock)
    var patch = { level: MAX_LEVEL, growth: 100, exp: e.exp, maxExp: e.maxExp }
    STAT_KEYS.forEach(function (k) { patch[k] = stats[k] })
    return savePet(id, patch)
  }

  function maxMagic(id) {
    var pet = petState().totalPets[findPetIndex(id)]
    if (!pet) throw new Error('宠物不存在')
    var magic = deepClone(pet.magic || [])
    magic.forEach(function (m) { m.rank = MAX_MAGIC_RANK })
    savePet(id, { magic: magic })
    return magic.length
  }

  // ---------------- UI ----------------
  function el(tag, attrs, children) {
    var e = document.createElement(tag)
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'style') e.style.cssText = attrs[k]
      else e.setAttribute(k, attrs[k])
    })
    ;(children || []).forEach(function (c) { e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c) })
    return e
  }

  function injectStyle() {
    var css = [
      '#gm-toggle{position:fixed;right:16px;bottom:16px;z-index:2147483000;width:44px;height:44px;border-radius:50%;background:#f19202;color:#fff;font:bold 14px/44px Microsoft Yahei,sans-serif;text-align:center;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.5);user-select:none}',
      '#gm-panel{position:fixed;right:16px;bottom:70px;z-index:2147483001;width:440px;max-height:80vh;display:none;flex-direction:column;background:rgba(20,24,33,.97);color:#ddd;border:1px solid #f19202;border-radius:8px;font:12px/1.5 Microsoft Yahei,sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.6)}',
      '#gm-panel.open{display:flex}',
      '#gm-panel .gm-hd{display:flex;justify-content:space-between;align-items:center;padding:6px 12px;border-bottom:1px solid #333;cursor:move}',
      '#gm-panel .gm-tabs{display:flex;gap:4px}',
      '#gm-panel .gm-tab{padding:4px 12px;border-radius:4px;cursor:pointer;color:#aaa;font-size:13px}',
      '#gm-panel .gm-tab.active{background:#f19202;color:#fff;font-weight:bold}',
      '#gm-panel .gm-close{cursor:pointer;color:#aaa;font-size:16px}',
      '#gm-panel .gm-page{display:none;flex-direction:column;flex:1;min-height:0}',
      '#gm-panel .gm-page.active{display:flex}',
      '#gm-panel .gm-bar{display:flex;gap:6px;padding:8px 12px;flex-wrap:wrap;align-items:center}',
      '#gm-panel input,#gm-panel select{background:#0d1117;color:#ddd;border:1px solid #444;border-radius:4px;padding:4px 6px;font-size:12px;outline:none}',
      '#gm-panel input:focus,#gm-panel select:focus{border-color:#f19202}',
      '#gm-panel input[type=checkbox]{padding:0;margin:0 4px 0 0;vertical-align:middle}',
      '#gm-panel .gm-search{flex:1;min-width:120px}',
      '#gm-panel .gm-num{width:64px}',
      '#gm-panel .gm-info{padding:0 12px 6px;color:#888}',
      '#gm-panel .gm-list{flex:1;overflow-y:auto;padding:0 6px 8px;min-height:120px}',
      '#gm-panel .gm-item{display:flex;align-items:center;gap:8px;padding:5px 6px;border-radius:4px}',
      '#gm-panel .gm-item:hover{background:#222a36}',
      '#gm-panel .gm-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
      '#gm-panel .gm-type{color:#888;width:56px;flex-shrink:0}',
      '#gm-panel .gm-btn{display:inline-block;background:#f19202;color:#fff;border-radius:4px;padding:4px 10px;cursor:pointer;font-size:12px;flex-shrink:0;user-select:none}',
      '#gm-panel .gm-btn:hover{background:#ffab2e}',
      '#gm-panel .gm-btn.ghost{background:#2b3442}',
      '#gm-panel .gm-btn.ghost:hover{background:#3a4658}',
      '#gm-panel .gm-pet-sel{flex:1;min-width:0}',
      '#gm-panel .gm-form{display:grid;grid-template-columns:repeat(2,1fr);gap:6px 12px;padding:4px 12px 8px;overflow-y:auto}',
      '#gm-panel .gm-field{display:flex;align-items:center;gap:6px}',
      '#gm-panel .gm-field label{width:52px;color:#aaa;flex-shrink:0;text-align:right}',
      '#gm-panel .gm-field input,#gm-panel .gm-field select{flex:1;min-width:0}',
      '#gm-panel .gm-sep{grid-column:1/-1;border-top:1px dashed #333;margin:2px 0;color:#888;padding-top:4px}',
      '#gm-panel .gm-opts{padding:0 12px 4px;display:flex;flex-direction:column;gap:3px;color:#bbb}',
      '#gm-panel .gm-actions{display:flex;gap:6px;flex-wrap:wrap;padding:6px 12px 10px}',
      '#gm-panel .gm-page.gm-scroll{overflow-y:auto}',
      '#gm-panel .gm-sec{padding:8px 12px 4px;color:#f19202;font-weight:bold}',
      '#gm-panel .gm-box{margin:0 12px;padding:6px 8px;background:#0d1117;border:1px solid #333;border-radius:4px;white-space:pre-line;color:#ccc}',
      '#gm-toggle.warn::after{content:"";position:absolute;top:0;right:0;width:12px;height:12px;border-radius:50%;background:#ff4d4f;border:2px solid #fff}',
      '#gm-toast{position:fixed;left:50%;top:18%;transform:translateX(-50%);z-index:2147483002;background:rgba(0,0,0,.85);color:#fff;padding:8px 16px;border-radius:6px;font:13px Microsoft Yahei,sans-serif;pointer-events:none;transition:opacity .3s;opacity:0}'
    ].join('\n')
    document.head.appendChild(el('style', null, [css]))
  }

  var toastTimer
  function toast(msg, isErr) {
    var t = document.getElementById('gm-toast')
    t.textContent = msg
    t.style.color = isErr ? '#ff7b7b' : '#7dff9b'
    t.style.opacity = '1'
    clearTimeout(toastTimer)
    toastTimer = setTimeout(function () { t.style.opacity = '0' }, 2000)
  }

  function buildPropPage() {
    var page = el('div', { class: 'gm-page' })
    var search = el('input', { class: 'gm-search', placeholder: '搜索道具名称 / ID' })
    var typeSel = el('select')
    typeSel.appendChild(el('option', { value: '' }, ['全部类型']))
    var typeCount = {}
    ctx.props.forEach(function (p) { typeCount[p.type] = (typeCount[p.type] || 0) + 1 })
    Object.keys(typeCount).forEach(function (t) {
      typeSel.appendChild(el('option', { value: t }, [(TYPE_LABELS[t] || t) + ' (' + typeCount[t] + ')']))
    })
    var numInput = el('input', { class: 'gm-num', type: 'number', min: '1', value: '1', title: '数量' })
    var info = el('div', { class: 'gm-info' })
    var list = el('div', { class: 'gm-list' })
    page.appendChild(el('div', { class: 'gm-bar' }, [search, typeSel, numInput]))
    page.appendChild(info)
    page.appendChild(list)

    function updateInfo(shown) {
      var pd = ctx.store.state.playerModule.packageDetail
      info.textContent = '背包：' + pd.packageProps.length + ' / ' + pd.maxCapacity + ' 格　|　显示 ' + shown + ' / ' + ctx.props.length + ' 个道具　|　装备每次最多 20 件'
    }

    function render() {
      var kw = search.value.trim().toLowerCase()
      var type = typeSel.value
      var items = ctx.props.filter(function (p) {
        if (type && p.type !== type) return false
        if (!kw) return true
        return String(p.name).toLowerCase().indexOf(kw) >= 0 || String(p.id).toLowerCase().indexOf(kw) >= 0
      })
      list.innerHTML = ''
      var frag = document.createDocumentFragment()
      items.slice(0, 300).forEach(function (p) {
        var desc = Array.isArray(p.description) ? p.description.join('\n') : (p.description || '')
        var btn = el('span', { class: 'gm-btn' }, ['添加'])
        btn.addEventListener('click', function () {
          addProp(p, numInput.value)
            .then(function (n) { toast('已添加 ' + p.name + ' × ' + n); updateInfo(items.length) })
            .catch(function (e) { toast('添加失败：' + ((e && e.message) || e), true) })
        })
        frag.appendChild(el('div', { class: 'gm-item', title: '[' + p.id + '] ' + desc }, [
          el('span', { class: 'gm-type' }, [TYPE_LABELS[p.type] || p.type]),
          el('span', { class: 'gm-name', style: 'color:' + (LEVEL_COLORS[p.level] || '#ddd') }, [p.name]),
          btn
        ]))
      })
      list.appendChild(frag)
      if (items.length > 300) list.appendChild(el('div', { class: 'gm-info' }, ['仅显示前 300 条，请输入关键词缩小范围']))
      updateInfo(items.length)
    }

    var timer
    search.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(render, 150) })
    typeSel.addEventListener('change', render)
    return { page: page, onShow: function () { render(); search.focus() } }
  }

  function buildPetPage() {
    var page = el('div', { class: 'gm-page' })
    var petSel = el('select', { class: 'gm-pet-sel' })
    var refreshBtn = el('span', { class: 'gm-btn ghost', title: '重新读取宠物列表' }, ['刷新'])
    page.appendChild(el('div', { class: 'gm-bar' }, [petSel, refreshBtn]))

    var form = el('div', { class: 'gm-form' })
    var inputs = {}
    function field(key, label, input) {
      inputs[key] = input
      form.appendChild(el('div', { class: 'gm-field' }, [el('label', null, [label]), input]))
    }
    var nameInput = el('input', { disabled: 'disabled', title: '名称用于进化等配置查找，不提供修改' })
    field('name', '名称', nameInput)
    var attrSel = el('select')
    ATTRS.forEach(function (a) { attrSel.appendChild(el('option', { value: a }, [a])) })
    field('attribute', '五行', attrSel)
    field('level', '等级', el('input', { type: 'number', min: '1', max: String(MAX_LEVEL), step: '1' }))
    field('growth', '成长', el('input', { type: 'number', min: '0', step: '0.01' }))
    field('rank', '阶级', el('input', { type: 'number', min: '0', step: '1', title: '宠物品阶，影响属性公式' }))
    field('evo', '进化次数', el('input', { type: 'number', min: '0', step: '1' }))
    field('exp', '经验', el('input', { type: 'number', min: '0', step: '1' }))
    var maxExpView = el('input', { disabled: 'disabled', title: '由等级自动决定' })
    field('maxExp', '升级所需', maxExpView)
    form.appendChild(el('div', { class: 'gm-sep' }, ['五维属性（勾选自动重算时，改等级/成长/阶级/五行会按游戏公式刷新）']))
    STAT_KEYS.forEach(function (k) { field(k, STAT_LABELS[k], el('input', { type: 'number', min: '1', step: '1' })) })
    page.appendChild(form)

    var autoChk = el('input', { type: 'checkbox' })
    autoChk.checked = true
    var lockChk = el('input', { type: 'checkbox' })
    page.appendChild(el('div', { class: 'gm-opts' }, [
      el('label', null, [autoChk, '修改等级 / 成长 / 阶级 / 五行时自动按公式重算五维']),
      el('label', { title: '游戏在经验溢出时会按公式重算五维，锁定后 100 级宠物不会再触发重算' }, [lockChk, '锁定自定义五维（仅 100 级生效，经验将不再增长）'])
    ]))

    var saveBtn = el('span', { class: 'gm-btn' }, ['保存修改'])
    var calcBtn = el('span', { class: 'gm-btn ghost' }, ['按公式重算五维'])
    var maxBtn = el('span', { class: 'gm-btn ghost' }, ['一键满级满成长'])
    var magicBtn = el('span', { class: 'gm-btn ghost' }, ['技能全满级'])
    page.appendChild(el('div', { class: 'gm-actions' }, [saveBtn, calcBtn, maxBtn, magicBtn]))
    var info = el('div', { class: 'gm-info' })
    page.appendChild(info)

    function curId() { return petSel.value }
    function curPet() { return petState().totalPets[findPetIndex(curId())] }

    function fillPetList(keepId) {
      var pets = sortedPets()
      petSel.innerHTML = ''
      pets.forEach(function (p) {
        petSel.appendChild(el('option', { value: p.id }, ['[' + petTag(p) + '] ' + p.name + '  Lv' + p.level + '  成长' + p.growth + '  ' + p.attribute]))
      })
      if (keepId && findPetIndex(keepId) >= 0) petSel.value = keepId
      fillForm()
    }

    function fillForm() {
      var p = curPet()
      if (!p) { info.textContent = '没有找到宠物'; return }
      nameInput.value = p.name
      attrSel.value = p.attribute
      ;['level', 'growth', 'rank', 'evo', 'exp'].forEach(function (k) { inputs[k].value = p[k] != null ? p[k] : 0 })
      maxExpView.value = p.maxExp === LOCK_EXP ? '已锁定' : p.maxExp
      lockChk.checked = p.maxExp === LOCK_EXP
      STAT_KEYS.forEach(function (k) { inputs[k].value = p[k] })
      var magic = (p.magic || []).map(function (m) { return m.name + ' ' + m.rank + '级' }).join('，')
      info.textContent = '技能：' + (magic || '无') + '　|　共 ' + petState().totalPets.length + ' 只宠物'
    }

    function readForm() {
      var level = toInt(inputs.level.value, 1, MAX_LEVEL, 1)
      return {
        attribute: attrSel.value,
        level: level,
        growth: toNum(inputs.growth.value, 0, 1),
        rank: toInt(inputs.rank.value, 0, null, 0),
        evo: toInt(inputs.evo.value, 0, null, 0),
        exp: toInt(inputs.exp.value, 0, null, 0)
      }
    }

    function recalcIntoForm() {
      var f = readForm()
      var s = calcStats(f.level, f.growth, f.rank, f.attribute)
      STAT_KEYS.forEach(function (k) { inputs[k].value = s[k] })
      maxExpView.value = (lockChk.checked && f.level >= MAX_LEVEL) ? '已锁定' : expForLevel(f.level, '')
    }

    ;['level', 'growth', 'rank'].forEach(function (k) {
      inputs[k].addEventListener('input', function () { if (autoChk.checked) recalcIntoForm() })
    })
    attrSel.addEventListener('change', function () { if (autoChk.checked) recalcIntoForm() })
    lockChk.addEventListener('change', recalcIntoForm)
    petSel.addEventListener('change', fillForm)
    refreshBtn.addEventListener('click', function () { fillPetList(curId()) })
    calcBtn.addEventListener('click', function () { recalcIntoForm(); toast('已按公式计算，点“保存修改”生效') })

    saveBtn.addEventListener('click', function () {
      var p = curPet()
      if (!p) return toast('请先选择宠物', true)
      try {
        var f = readForm()
        var e = resolveExp(p, f.level, f.exp, lockChk.checked)
        f.exp = e.exp
        f.maxExp = e.maxExp
        STAT_KEYS.forEach(function (k) { f[k] = toInt(inputs[k].value, 1, null, p[k]) })
        savePet(p.id, f)
        fillPetList(p.id)
        toast('已保存 ' + p.name + ' 的属性')
      } catch (err) { toast('保存失败：' + err.message, true) }
    })
    maxBtn.addEventListener('click', function () {
      var p = curPet()
      if (!p) return toast('请先选择宠物', true)
      try { maxOutPet(p.id, lockChk.checked); fillPetList(p.id); toast(p.name + ' 已满级满成长') } catch (err) { toast('操作失败：' + err.message, true) }
    })
    magicBtn.addEventListener('click', function () {
      var p = curPet()
      if (!p) return toast('请先选择宠物', true)
      try { var n = maxMagic(p.id); fillPetList(p.id); toast(p.name + ' 的 ' + n + ' 个技能已升到 ' + MAX_MAGIC_RANK + ' 级') } catch (err) { toast('操作失败：' + err.message, true) }
    })

    return { page: page, onShow: function () { fillPetList(curId()) } }
  }

  function buildSavePage() {
    var page = el('div', { class: 'gm-page gm-scroll' })
    var summaryBox = el('div', { class: 'gm-box' })
    var exportBtn = el('span', { class: 'gm-btn' }, ['导出存档文件'])
    var importBtn = el('span', { class: 'gm-btn ghost' }, ['从文件导入'])
    var fileInput = el('input', { type: 'file', accept: '.json,application/json', style: 'display:none' })
    var statusBox = el('div', { class: 'gm-box' })
    var bindBtn = el('span', { class: 'gm-btn' }, ['新建存档文件'])
    var openBtn = el('span', { class: 'gm-btn ghost' }, ['绑定已有存档文件'])
    var authBtn = el('span', { class: 'gm-btn' }, ['授权继续自动保存'])
    var saveNowBtn = el('span', { class: 'gm-btn ghost' }, ['立即保存'])
    var unbindBtn = el('span', { class: 'gm-btn ghost' }, ['解除绑定'])
    var syncActions = el('div', { class: 'gm-actions' }, [bindBtn, openBtn, authBtn, saveNowBtn, unbindBtn])

    page.appendChild(el('div', { class: 'gm-sec' }, ['当前进度']))
    page.appendChild(summaryBox)
    page.appendChild(el('div', { class: 'gm-sec' }, ['手动备份']))
    page.appendChild(el('div', { class: 'gm-actions' }, [exportBtn, importBtn, fileInput]))
    page.appendChild(el('div', { class: 'gm-info' }, ['导出的 .json 可以随意复制备份，换电脑或换浏览器后导入即可恢复。导入会覆盖当前进度。']))
    page.appendChild(el('div', { class: 'gm-sec' }, ['自动保存到固定文件']))
    page.appendChild(statusBox)
    page.appendChild(syncActions)
    page.appendChild(el('div', { class: 'gm-info' }, ['绑定后，游戏每次存档都会在 1 秒内同步写入该文件；打开游戏时如果文件里的进度更新，会提示是否读取。浏览器重启后需要授权一次，弹窗里选“每次访问时都允许”可免去后续授权。']))

    function show(node, on) { node.style.display = on ? '' : 'none' }
    function render() {
      var s = buildSummary()
      summaryBox.textContent = s ? summaryText(s) : '游戏尚未加载完成'
      var name = sync.handle ? '「' + sync.handle.name + '」' : ''
      var text
      switch (sync.state) {
        case 'unsupported': text = '当前浏览器不支持写入本地文件（需要 Chrome 或 Edge 86 以上），请使用上面的手动导出 / 导入。'; break
        case 'active': text = '已绑定 ' + name + '，自动保存中' + (sync.lastWrite ? '\n上次写入：' + fmtTime(sync.lastWrite) : '') + (sync.persisted ? '' : '\n浏览器无法记住该文件，刷新页面后需要重新绑定'); break
        case 'prompt': text = '已绑定 ' + name + '，等待授权\n点下方“授权继续自动保存”或游戏画面任意位置，在浏览器弹窗中选择允许。'; break
        case 'paused': text = '已绑定 ' + name + '，自动保存已暂停\n检测到游戏进度被重置，文件里仍是旧进度。点“立即保存”会用当前进度覆盖文件。'; break
        case 'error': text = '已绑定 ' + name + '，出错：' + sync.message; break
        default: text = '未绑定。新建或选择一个 .json 文件后，存档会自动同步写入这个文件。'
      }
      statusBox.textContent = text
      show(syncActions, sync.state !== 'unsupported')
      show(authBtn, sync.state === 'prompt')
      show(saveNowBtn, !!sync.handle && sync.state !== 'prompt')
      show(unbindBtn, !!sync.handle)
      bindBtn.textContent = sync.handle ? '改为新建文件' : '新建存档文件'
      openBtn.textContent = sync.handle ? '改为绑定已有文件' : '绑定已有存档文件'
    }
    sync.listeners.push(render)

    function run(fn, okMsg) {
      return Promise.resolve().then(fn)
        .then(function (r) { if (okMsg) toast(typeof okMsg === 'function' ? okMsg(r) : okMsg); render() })
        .catch(function (e) { if (e && e.name === 'AbortError') return; toast((e && e.message) || String(e), true); render() })
    }
    exportBtn.addEventListener('click', function () { run(downloadSave, function (n) { return '已导出 ' + n }) })
    importBtn.addEventListener('click', function () { fileInput.value = ''; fileInput.click() })
    fileInput.addEventListener('change', function () {
      var f = fileInput.files && fileInput.files[0]
      if (!f) return
      run(function () {
        return f.text().then(function (text) {
          var save = parseSave(text)
          var msg = '确定导入存档「' + f.name + '」吗？当前进度会被覆盖。\n\n' +
            (save.savedAt ? '保存时间：' + fmtTime(save.savedAt) + '\n' : '') +
            (save.summary ? summaryText(save.summary) : '（控制台备份格式，无摘要）')
          if (!window.confirm(msg)) return
          toast('导入成功，正在刷新…')
          applySave(save)
        })
      })
    })
    bindBtn.addEventListener('click', function () { run(bindFile) })
    openBtn.addEventListener('click', function () { run(openFile) })
    authBtn.addEventListener('click', function () { run(authorize) })
    saveNowBtn.addEventListener('click', function () {
      run(function () {
        return writeNow(true).then(function () { if (sync.state === 'error') throw new Error(sync.message) })
      }, '已写入存档文件')
    })
    unbindBtn.addEventListener('click', function () {
      if (window.confirm('解除绑定后不再自动写入文件（文件本身不会删除），确定吗？')) run(unbind, '已解除绑定')
    })
    return { page: page, onShow: render }
  }

  function buildPanel() {
    injectStyle()
    var toggle = el('div', { id: 'gm-toggle', title: 'GM 面板 (Ctrl+Shift+G)' }, ['GM'])
    var panel = el('div', { id: 'gm-panel' })
    var closeBtn = el('span', { class: 'gm-close', title: '关闭' }, ['✕'])
    var pages = [
      { name: '道具', view: buildPropPage() },
      { name: '宠物', view: buildPetPage() },
      { name: '存档', view: buildSavePage() }
    ]
    var tabsBox = el('div', { class: 'gm-tabs' })
    pages.forEach(function (p) { p.tab = el('span', { class: 'gm-tab' }, [p.name]); tabsBox.appendChild(p.tab) })
    var header = el('div', { class: 'gm-hd' }, [tabsBox, closeBtn])
    panel.appendChild(header)
    pages.forEach(function (p) { panel.appendChild(p.view.page) })
    document.body.appendChild(toggle)
    document.body.appendChild(panel)
    document.body.appendChild(el('div', { id: 'gm-toast' }))
    ctx.toggleEl = toggle

    var current = pages[0]
    function switchTo(target) {
      current = target
      pages.forEach(function (p) {
        p.tab.classList.toggle('active', p === target)
        p.view.page.classList.toggle('active', p === target)
      })
      target.view.onShow()
    }
    pages.forEach(function (p) { p.tab.addEventListener('click', function () { switchTo(p) }) })

    function setOpen(open) {
      panel.classList.toggle('open', open)
      if (open) switchTo(current)
    }
    function isToggleKey(e) { return e.ctrlKey && e.shiftKey && (e.key === 'G' || e.key === 'g') }
    toggle.addEventListener('click', function () { setOpen(!panel.classList.contains('open')) })
    closeBtn.addEventListener('click', function () { setOpen(false) })
    document.addEventListener('keydown', function (e) {
      if (isToggleKey(e)) { e.preventDefault(); setOpen(!panel.classList.contains('open')) }
    })
    ;['keydown', 'keyup', 'keypress'].forEach(function (type) {
      panel.addEventListener(type, function (e) { if (!isToggleKey(e)) e.stopPropagation() })
    })

    var drag = null
    header.addEventListener('mousedown', function (e) {
      if (e.target !== header) return
      var r = panel.getBoundingClientRect()
      drag = { dx: e.clientX - r.left, dy: e.clientY - r.top }
      e.preventDefault()
    })
    document.addEventListener('mousemove', function (e) {
      if (!drag) return
      panel.style.left = Math.max(0, e.clientX - drag.dx) + 'px'
      panel.style.top = Math.max(0, e.clientY - drag.dy) + 'px'
      panel.style.right = 'auto'
      panel.style.bottom = 'auto'
    })
    document.addEventListener('mouseup', function () { drag = null })
  }

  function findPetByKey(key) {
    var list = petState().totalPets
    for (var i = 0; i < list.length; i++) if (list[i].id === key || list[i].name === key) return list[i]
    return null
  }

  window.__GM__ = {
    add: function (nameOrId, num) {
      var cfg = ctx.props && ctx.props.find(function (p) { return p.name === nameOrId || p.id === nameOrId })
      if (!cfg) return Promise.reject(new Error('未找到道具：' + nameOrId))
      return addProp(cfg, num)
    },
    list: function (kw) {
      return (ctx.props || []).filter(function (p) { return !kw || p.name.indexOf(kw) >= 0 }).map(function (p) { return p.id + ' ' + p.name + ' [' + p.type + ']' })
    },
    pets: function () {
      return sortedPets().map(function (p) { return p.id + ' [' + petTag(p) + '] ' + p.name + ' Lv' + p.level + ' 成长' + p.growth })
    },
    editPet: function (idOrName, patch) {
      var p = findPetByKey(idOrName)
      if (!p) throw new Error('未找到宠物：' + idOrName)
      return savePet(p.id, patch || {})
    },
    maxPet: function (idOrName, lock) {
      var p = findPetByKey(idOrName)
      if (!p) throw new Error('未找到宠物：' + idOrName)
      return maxOutPet(p.id, !!lock)
    },
    save: {
      collect: collectSave,
      parse: parseSave,
      apply: applySave,
      download: downloadSave,
      bind: bindFile,
      open: openFile,
      authorize: authorize,
      unbind: unbind,
      flush: function () { return writeNow(true) },
      status: function () {
        return { state: sync.state, message: sync.message, file: sync.handle && sync.handle.name, lastWrite: sync.lastWrite, persisted: sync.persisted, changes: sync.changeCount }
      }
    },
    calcStats: calcStats
  }

  var tries = 0
  function boot() {
    tries++
    var vm = findRootVm()
    if (vm && vm.$store && vm.$store.state.playerModule && vm.$store.state.petModule && vm.$gameLocalStorage) {
      var cfg = loadConfigModule()
      if (cfg) {
        ctx.vm = vm
        ctx.store = vm.$store
        ctx.props = cfg.uP
        ctx.expTable = Array.isArray(cfg.jL) ? cfg.jL : null
        buildPanel()
        initSync().catch(function (e) { setState('error', (e && e.message) || String(e)) })
        console.log('[GM] 面板已就绪：' + cfg.uP.length + ' 个道具，经验表' + (ctx.expTable ? ctx.expTable.length + ' 级' : '未找到') + '，Ctrl+Shift+G 打开')
        return
      }
    }
    if (tries < 120) setTimeout(boot, 500)
    else console.warn('[GM] 初始化失败：未找到 Vue 实例或配置模块')
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot)
  else boot()
})()
