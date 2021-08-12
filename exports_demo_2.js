//require沒有給路徑,會預設在node_modules資料夾內找此模塊
var tools = require("./exports_demo_1");

console.log(tools);

// console.log(tools.add(1,2));

console.log(tools.tools.add(1,2));
console.log(tools.version);