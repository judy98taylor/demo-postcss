const postcss = require("postcss");
const postcssJs = require("postcss-js");

const css = "@media screen { z-index: 1 }";
const root = postcss.parse(css);

const parse = require("json-to-ast");

const settings = {
  // Appends location information. Default is <true>
  loc: true
  // Appends source information to node’s location. Default is <null>
  //   source: 'data.json'
};

let rr = parse("@media screen { z-index: 1 }", settings);

let r = postcssJs.objectify(root); //=> { '@media screen': { zIndex: '1' } }
console.log(r);
console.log(rr);
