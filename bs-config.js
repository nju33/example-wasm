module.exports = {
  ui: false,
  files: false,
  server: {
    baseDir: 'docs',
    routes: {
      '/scripts/wasm': './target/wasm32-unknown-emscripten/debug'
    }
  },
  port: 3333,
  ghostMode: false,
  open: false,
  notify: false,
  rewriteRules: [
    {
      match: /<%=main.wasm%>/,
      fn() {
        const filename = require('glob').sync('target/**/deps/main*.wasm')[0];
        return require('path').basename(filename);
      }
    }
  ]
};
