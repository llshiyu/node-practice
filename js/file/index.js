let fs = require('fs');

function travel(dir,callback) {
    console.log(dir)
    fs.readdirSync(dir).forEach(function (file) {
        console.log(111,file,'  ',fs.statSync(file).isDirectory())
        let path;
        // let pathName = path.join(dir,file);
        if(fs.statSync(file).isDirectory()){
            travel(dir,callback)
        }else{
            callback(file)
        }
    })
}

travel('./readlineText',function (path) {
    console.log(path,999)
})