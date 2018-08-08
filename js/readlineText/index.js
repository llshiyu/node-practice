const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question('这是问题\n',(answer)=>{
//     console.log(`这是答案：${answer}`)
//
//     rl.close()
// })

rl.on('line',(res)=>{
    console.log(`接收到：${res}`)
})