var exec = require('child_process').exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response) {
    // console.log("requestHandlersjs  Request handler 'start' was called.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post" enctype="multipart/form-data">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        // '<input type="submit" value="Submit text" />' +
        '<input type="file" name="upload" multiple="multiple">' +
        '<input type="submit" value="提交" />' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request) {
    // console.log("requestHandlersjs  Request handler 'upload' was called.");
    if (request.url == '/upload' && request.method.toLowerCase() == 'post') {
        //formidable模块的方法和属性
        // Formidable.incomingForm()
        //
        // 可以通过该方法创建一个form表单
        var form = new formidable.IncomingForm();
        //通过uploadDir设置上传文件时临时文件存放的位置，默认上传的临时文件存放的位置为os.tmpDir();
        form.uploadDir = 'tmp';
        // console.log("about to parse");
        //parse方法解析Node.js中request请求中包含的form表单提交的数据。cb为处理请求的回调函数。
        form.parse(request, function (error, fields, files) {
            try {
                // console.log(request.method, files.upload.path);
                // fs.renameSync(files.upload.path, './tmp/test.png');
                fs.rename(files.upload.path, "./tmp/test.png", function () {
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write("received image:<br/>");
                    response.write("<img src='/show' />");
                    response.end();
                });
            } catch (e) {
                // console.log('catch', e);
            }
        });
    } else {
        // console.log('else', request.method, request.url)
    }

}

function show(response) {
    // console.log("Request handler 'show' was called.");
    fs.readFile("./tmp/test.png", "binary", function (error, file) {
        if (error) {
            // console.log('error', error, file)
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n33333");
            response.end();
        } else {
            // console.log('else ', file)
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;