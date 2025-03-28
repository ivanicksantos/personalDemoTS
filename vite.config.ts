import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // Your source directory
    server: {
        open: false, // Disable auto-opening the browser
    },
    build: {
        outDir: '../dist',
        sourcemap: true,
    },
});
