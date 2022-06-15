export default {
  input: "index.js",
  output: [{
    file: "dist/index.js",
    format: "esm"
  }, {
    file: "dist/index.cjs",
    format: "cjs"
  }]
}
