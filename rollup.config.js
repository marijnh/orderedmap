export default {
  input: "index.js",
  output: [{
    file: "dist/index-es.js",
    format: "esm"
  }, {
    file: "dist/index-cjs.cjs",
    format: "cjs"
  }]
}
