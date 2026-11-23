import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve, relative } from 'node:path'
import { readdirSync } from 'node:fs'

function getHtmlInputs(
    directory: string,
    root = directory,
    inputs: Record<string, string> = {},
) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
        if (entry.name.startsWith('.') || ['node_modules', 'dist'].includes(entry.name)) {
            continue
        }

        const fullPath = resolve(directory, entry.name)

        if (entry.isDirectory()) {
            getHtmlInputs(fullPath, root, inputs)
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            const name = relative(root, fullPath)
                .replace(/\\/g, '/')
                .replace(/\.html$/, '')

            inputs[name] = fullPath
        }
    }

    return inputs
}

export default defineConfig({
    base: '/MiPagVocaloid/',
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: getHtmlInputs(import.meta.dirname),
        },
    },
})