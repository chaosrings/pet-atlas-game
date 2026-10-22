import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const src = path.resolve(here, '../../client')
const out = path.resolve(here, '../../dist/pet-atlas-standalone')

const skip = f => f.endsWith('.gz') || f.endsWith('.bak') || f.endsWith('.map')

fs.rmSync(out, { recursive: true, force: true })
fs.mkdirSync(out, { recursive: true })
fs.cpSync(src, out, { recursive: true, filter: s => !skip(s) })

const html = path.join(out, 'index.html')
let h = fs.readFileSync(html, 'utf8')
h = h.replace(/(src|href)="\/(?!\/)/g, '$1="')
fs.writeFileSync(html, h)

const jsDir = path.join(out, 'js')
let patched = 0
let routerPatched = 0
for (const f of fs.readdirSync(jsDir)) {
  const p = path.join(jsDir, f)
  let t = fs.readFileSync(p, 'utf8')
  let n = t.replace(/(\['p'\]|\.p)='\/'/g, (m, k) => { patched++; return `${k}=''` })
  n = n.replace(/'mode':_0x\w+\(0x\w+\),'routes'/g, () => { routerPatched++; return `'mode':'hash','routes'` })
  if (n !== t) fs.writeFileSync(p, n)
}
if (patched === 0) throw new Error('publicPath not found')
if (routerPatched !== 1) throw new Error('router mode patch count = ' + routerPatched)

const cssDir = path.join(out, 'css')
let cssCount = 0
for (const f of fs.readdirSync(cssDir)) {
  const p = path.join(cssDir, f)
  const t = fs.readFileSync(p, 'utf8')
  const n = t.replace(/url\((["']?)\/(?!\/)/g, (m, q) => { cssCount++; return `url(${q}../` })
  if (n !== t) fs.writeFileSync(p, n)
}

let size = 0
const walk = d => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p) : (size += fs.statSync(p).size) } }
walk(out)
console.log(`publicPath patched: ${patched}, router->hash: ${routerPatched}, css urls: ${cssCount}, size: ${(size / 1048576).toFixed(1)} MB`)
console.log(`output: ${out}`)
