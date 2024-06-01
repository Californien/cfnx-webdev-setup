import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	test: {
		include: ['**/js/*.test.js', '**/ts/*.test.ts'],
		globals: true,
		reporters: 'verbose',
		environment: 'jsdom'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'#': path.resolve(__dirname, './src/assets')
		}
	},
	root: 'src',
	assetsInclude: ['./assets/**/*.*'],
	base: '',
	build: {
		emptyOutDir: true,
		outDir: '../dist'
	},
	css: {
		postcss: {
			plugins: [autoprefixer({})]
		}
	}
});
