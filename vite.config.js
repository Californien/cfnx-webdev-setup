import { defineConfig } from 'vite';
export default defineConfig({
    root: 'src',
    assetsInclude: ['./assets/**/*.*'],
    base: '',
    build: {
        emptyOutDir: true,
        outDir: '../dist',
    }
});