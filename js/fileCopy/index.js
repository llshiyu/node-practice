const fs = require('fs');
// console.log(process.cwd()) // 返回 Node.js 进程当前工作的目录
// fs 相对路径相对的是 process.cwd()

// 异步删除
// fs.unlink('./fileCopy/delete.js',(res)=>{
//     console.log('res',res);
//     if(res) throw res;
//     console.log('成功删除 delete.js')
// })
// 同步删除
// try{
//     fs.unlinkSync('./fileCopy/delete.js');
//     console.log('成功删除 delete.js')
// }catch (e) {
//     console.log('catch ',e)
// }

// console.log(process.argv[0],process.argv[1])

// fs.readFileSync从源路径读取文件内容  teFileSync将文件内容写入目标路径。
fs.writeFileSync('./modelText/copy.txt', fs.readFileSync('./fileCopy/open.txt'));

let a = fs.readFileSync('./fileCopy/open.txt')
console.log(a.toString('utf-8'))
// console.log(fs.chmod('./fileCopy/open.txt'))

