import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import VitePluginCssModules from "vite-plugin-css-modules";
import svgr from "vite-plugin-svgr";
// import commonjs from "rollup-plugin-commonjs";
// import nodeBuiltins from "rollup-plugin-node-builtins";
import commonjsPlugin from "vite-plugin-commonjs";
// import nodePolyfills from "rollup-plugin-node-polyfills";
// import { Buffer } from 'Buffer';
// import { viteExternalsPlugin } from "vite-plugin-externals";
// import { nodePolyfills } from "vite-plugin-node-polyfills";

import requireTransform from "vite-plugin-require-transform";

import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import notifier from "vite-plugin-notifier";
import inject from "@rollup/plugin-inject";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: "build", //想要把dist修改成什么名字在这边改
    rollupOptions: {
      plugins: [
        inject({
          Buffer: ["buffer", "Buffer"],
        }),
      ],
    },
    /**
     * Instructs the plugin whether to enable mixed module transformations. 
     * This is useful in scenarios with modules that contain a mix of ES import statements and CommonJS require expressions. 
     * Set to true if require calls should be transformed to imports in mixed modules, 
     * or false if the require expressions should survive the transformation. 
     * The latter can be important if the code contains environment detection, 
     * or you are coding for an environment with special treatment for require calls such as ElectronJS. 
     * See also the "ignore" option.
     * url: https://www.electronjs.org/
     * */
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [
    react(),
    VitePluginCssModules.default(),
    requireTransform({}),
    svgr(),
    commonjsPlugin(),
    notifier(),
    // commonjs(),
    // nodeBuiltins(),
    // nodePolyfills({
    //   globals: {
    //     Buffer: true, // can also be 'build', 'dev', or false
    //     global: true,
    //     process: true,
    //   },
    // }),
  ],
  define: {
    "process.env": process.env,
    // Buffer: "buffer",
    "process.env.ESLINT_DISABLED": true,
  },
  optimizeDeps: {
    include: ["buffer-polyfill.js"],
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
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
      // buffer: "rollup-plugin-node-polyfills/polyfills/buffer-es6",
      // 添加其他别名配置
    },
  },
});
