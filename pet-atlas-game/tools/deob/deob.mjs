import { webcrack } from 'webcrack'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.resolve(here, '../../client/js')
const outDir = path.resolve(here, 'out')
const only = process.argv.slice(2)

const files = fs.readdirSync(srcDir)
  .filter(f => f.endsWith('.js'))
  .filter(f => !f.startsWith('chunk-vendors'))
  .filter(f => only.length === 0 || only.some(o => f.includes(o)))

for (const f of files) {
  const name = f.replace(/\.[0-9a-f]{8}\.js$/, '')
  const target = path.join(outDir, name)
  const t0 = Date.now()
  process.stdout.write(`[deob] ${f} ... `)
  try {
    const code = fs.readFileSync(path.join(srcDir, f), 'utf8')
    const result = await webcrack(code, { unpack: true, deobfuscate: true, unminify: true, jsx: false, mangle: false })
    fs.rmSync(target, { recursive: true, force: true })
    await result.save(target)
    const n = result.bundle ? result.bundle.modules.size : 0
    console.log(`ok, ${n} modules, ${((Date.now() - t0) / 1000).toFixed(1)}s -> out/${name}`)
  } catch (e) {
    console.log('FAIL: ' + (e && e.message))
  }
}
