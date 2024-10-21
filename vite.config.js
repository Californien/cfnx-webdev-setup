import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';
import autoprefixer from 'autoprefixer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	test: {
		include: ['./test/**/*.test.{js,ts}'],
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
	base: './',
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
