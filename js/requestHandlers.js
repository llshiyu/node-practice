var exec = require('child_process').exec;
var querystring = require("querystring");

function start(response) {
    console.log("requestHandlersjs  Request handler 'start' was called.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
    // exec('ls -lah',function (error, stdout, stderr) {
    //     response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
    //     response.write(stdout);
    //     response.end();
    // })

    // exec("find /",
    //     {timeout: 10000, maxBuffer: 20000 * 1024},
    //     function (error, stdout, stderr) {
    //         response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
    //         response.write(stdout+'6666666');
    //         response.end();
    //     });
    // return 'start的内容';
}

function upload(response, postData) {
    console.log("requestHandlersjs  Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
    response.write("Hello Upload " + postData + ", You've sent the text: " + querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;