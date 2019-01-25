let xlsx = require('node-xlsx');
let fs = require('fs');

// console.log('in',xlsx)
let sheets = xlsx.parse('./excal.xls');//获取到所有sheets
// console.log(sheets.length)
for (let i = 0; i < sheets.length; i++) {
    // console.log(sheets[i]['name']+' ')
    // 0-判断 1-单选 2-多选

}
let print = ''
for (let row in sheets[0]['data']) {
    // console.log(row)
    let r = sheets[0]['data'][row];
    let title = r[2]
    let ans = r[3]
    // console.log(row+'.'+title+' '+ans)
    print += row+'.'+title+' '+ans+'\r\n'
}
for (let row in sheets[1]['data']) {
    // console.log(row)
    let r = sheets[1]['data'][row];
    let title = r[2]
    let s = 'A.'+r[3]+'B.'+r[4]+'C.'+r[5]+'D.'+r[6]
    let ans = r[7]
    // console.log(row+'.'+title+' '+ans)
    // console.log(' '+s)
    print += row+'.'+title+' '+ans+'\r\n'
    print += ' '+s+'\r\n'
}
for (let row in sheets[2]['data']) {
    // console.log(row)
    let r = sheets[2]['data'][row];
    let title = r[2]
    let s = 'A.'+r[3]+'B.'+r[4]+'C.'+r[5]+'D.'+r[6]+'E.'+r[7]
    let ans = r[8]
    // console.log(row+'.'+title+' '+ans)
    // console.log(' '+s)
    print += row+'.'+title+' '+ans+'\r\n'
    print += ' '+s+'\r\n'
}

// console.log(print)

fs.writeFile('./print.txt',print,function (e) {
    if(e){
        console.log(e,'err')
    }
    console.log('ok')
})