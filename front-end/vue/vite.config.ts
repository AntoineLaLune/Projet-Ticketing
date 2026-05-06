/// <reference types="vite/types/importMeta.d.ts" />

import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
	server: {
		proxy: {
			"/api": {
				target: 'http://localhost:4000/',
				secure: false,
				// rewrite: (path) => path.replace("/api", "/api")
			}
		}
	},
	build: {
		outDir: "../../back-end/public"
	}
})
