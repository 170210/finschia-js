/* eslint-disable @typescript-eslint/naming-convention */
const path = require("path");

const target = "node";
const distdir = path.join(__dirname, "dist", target);

module.exports = [
  {
    target: target,
    entry: "./build/webserver.js",
    output: {
      path: distdir,
      filename: "webserver.js",
      library: {
        type: "commonjs",
      },
    },
    plugins: [],
    resolve: {},
  },
];
