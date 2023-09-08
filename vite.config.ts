import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import VitePluginCssModules from "vite-plugin-css-modules";
import svgr from "vite-plugin-svgr";
// import commonjs from "rollup-plugin-commonjs";
// import nodeBuiltins from "rollup-plugin-node-builtins";
import commonjsPlugin from "vite-plugin-commonjs";
// import nodePolyfills from "rollup-plugin-node-polyfills";
import { Buffer } from "buffer";
// import vitePluginRequire from "vite-plugin-require";
// import { viteExternalsPlugin } from "vite-plugin-externals";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginCssModules.default(),
    // vitePluginRequire.default(),
    svgr(),
    // nodePolyfills(),
    commonjsPlugin(),
    // commonjs(),
    // nodeBuiltins(),
  ],
  define: {
    "process.env": process.env,
    Buffer: Buffer,
    "process.env.ESLINT_DISABLED": true,
  },
  optimizeDeps: {
    include: ["buffer-polyfill.js"],
  },
  resolve: {
    alias: {
      // 在这里定义路径别名
      // root: path.resolve(__dirname, "."), // 示例：@ 代表项目根目录下的 src 文件夹
      src: path.resolve(__dirname, "./src"), // 示例：@ 代表项目根目录下的 src 文件夹
      // "src/images": path.resolve(__dirname, "./src/images/"), // 设置别名 'src'，映射到 '/@/src'
      "src/images": "/src/images",
      // // 创建一个别名，将 'swiper' 映射到插件的根目录
      swiper: path.resolve(__dirname, "node_modules/swiper"),
      // 添加其他别名配置
    },
  },
});
