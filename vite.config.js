import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
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
        outDir: '../dist',
    }
});