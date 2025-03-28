import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts"; // This plugin generates .d.ts files

export default defineConfig({
    publicDir: 'public', // Specifies the directory for public assets
    build: {
        lib: {
            entry: "./src/index.ts", // Specifies the entry file for the library
            name: "vite-react-ts-button", // Global name for the library
            fileName: (format) => `index.${format}.js`, // Output file name for different formats
            formats: ["cjs", "es"], // Output formats (CommonJS and ES Modules)
        },
        rollupOptions: {
            external: ['fs-extra', 'path'], // These dependencies are external and won't be bundled
            output: {
                globals: {
                    fs: 'fs', // Provides global variable for fs-extra
                    path: 'path', // Provides global variable for path
                },
            },
        },
        sourcemap: true, // Enable sourcemaps for easier debugging
        emptyOutDir: true, // Clears the output directory before building
    },
    resolve: {
        alias: {
            path: 'path-browserify', // Alias for path module to use browser version
            '@': path.resolve(__dirname, './src'), // Short alias for the src directory
        }
    },
    plugins: [dts()] // Generates TypeScript declaration files (.d.ts)
});
