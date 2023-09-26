import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '#': path.resolve(__dirname, './src/assets'),
            '<>': path.resolve(__dirname, './src/js')
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