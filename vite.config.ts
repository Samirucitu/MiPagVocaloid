import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { readdirSync, statSync } from 'fs'

// Busca automáticamente todos los .html en la raíz y dentro de /html
function getHtmlInputs(dir: string, inputs: Record<string, string> = {}) {
    for (const file of readdirSync(dir)) {
        if (file === 'node_modules' || file === 'dist' || file.startsWith('.')) continue
        const fullPath = resolve(dir, file)
        if (statSync(fullPath).isDirectory()) {
            getHtmlInputs(fullPath, inputs)
        } else if (file.endsWith('.html')) {
            const name = fullPath.replace(resolve(__dirname) + '\\', '').replace(resolve(__dirname) + '/', '').replace(/\.html$/, '')
            inputs[name] = fullPath
        }
    }
    return inputs
}

export default defineConfig({
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: getHtmlInputs(__dirname),
        },
    },
})