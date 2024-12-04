// vite.config.ts
import vue from "file:///Users/markdavesoriano/Work%20Files/innoendo/directus-fork/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.2.11_@types+node@22.7.5_sass@1.79.4_terser@5.31.6__vue@3.5.11_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "node:path";
import { nodeExternals } from "file:///Users/markdavesoriano/Work%20Files/innoendo/directus-fork/node_modules/.pnpm/rollup-plugin-node-externals@7.1.3_rollup@4.21.2/node_modules/rollup-plugin-node-externals/dist/index.js";
import { defineConfig } from "file:///Users/markdavesoriano/Work%20Files/innoendo/directus-fork/node_modules/.pnpm/vite@5.2.11_@types+node@22.7.5_sass@1.79.4_terser@5.31.6/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/markdavesoriano/Work%20Files/innoendo/directus-fork/node_modules/.pnpm/vite-plugin-dts@4.2.3_@types+node@22.7.5_rollup@4.21.2_typescript@5.6.3_vite@5.2.11_@types+no_rujvm6s4dgme4472zgwpomg4aa/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/markdavesoriano/Work Files/innoendo/directus-fork/packages/components";
var vite_config_default = defineConfig({
  plugins: [{ ...nodeExternals(), enforce: "pre" }, vue(), dts()],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFya2RhdmVzb3JpYW5vL1dvcmsgRmlsZXMvaW5ub2VuZG8vZGlyZWN0dXMtZm9yay9wYWNrYWdlcy9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFya2RhdmVzb3JpYW5vL1dvcmsgRmlsZXMvaW5ub2VuZG8vZGlyZWN0dXMtZm9yay9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYXJrZGF2ZXNvcmlhbm8vV29yayUyMEZpbGVzL2lubm9lbmRvL2RpcmVjdHVzLWZvcmsvcGFja2FnZXMvY29tcG9uZW50cy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgbm9kZUV4dGVybmFscyB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tbm9kZS1leHRlcm5hbHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFt7IC4uLm5vZGVFeHRlcm5hbHMoKSwgZW5mb3JjZTogJ3ByZScgfSwgdnVlKCksIGR0cygpXSxcblx0YnVpbGQ6IHtcblx0XHRsaWI6IHtcblx0XHRcdGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuXHRcdFx0ZmlsZU5hbWU6ICdpbmRleCcsXG5cdFx0XHRmb3JtYXRzOiBbJ2VzJ10sXG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3WixPQUFPLFNBQVM7QUFDeGEsU0FBUyxlQUFlO0FBQ3hCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsRUFBRSxHQUFHLGNBQWMsR0FBRyxTQUFTLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQUEsRUFDOUQsT0FBTztBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0osT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2Y7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
