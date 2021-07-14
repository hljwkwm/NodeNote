// 在node中，采用CemaScript进行编码
// 没有BOM和DOM
// 和浏览器中的JS不一样
console.log(window)
console.log(document)

/*
* ReferenceError: window is not defined
    at Object.<anonymous> (/Users/admin/Documents/GitMe/NodeNote/day01/src/01-没有bom和dom.js:1:13)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/
