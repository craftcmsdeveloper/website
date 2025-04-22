import { defineConfig } from "vite";
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tailwindcss from "@tailwindcss/vite";
import handlebars from 'vite-plugin-handlebars';
import Sitemap from 'vite-plugin-sitemap'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            about: resolve(__dirname, 'about.html'),
            experience: resolve(__dirname, 'experience.html'),
          },
        },
      },
    plugins: [
        tailwindcss(),
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
        }),
        Sitemap({ hostname: 'https://craftcmsdeveloper.co.uk' }),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/images/*',
                    dest: 'images'
                }
            ]
        })
    ],
})