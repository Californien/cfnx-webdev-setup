import { defineConfig } from 'vitest/config';
import path from 'path';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	test: {
		include: ['**/js/*.test.js', '**/ts/*.test.ts', '**/test/*.{js,ts}'],
		globals: true,
		reporters: 'verbose'
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
