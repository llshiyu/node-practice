let fs = require('fs')

let bin = new Buffer([0x65,0x66,0x67,0x68])
let sub = bin.slice(2)
sub[0] = 0x90
console.log(bin,sub)