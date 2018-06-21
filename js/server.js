//"Node.js是事件驱动的"

var http = require("http"); // 请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。

// 接下来我们调用http模块提供的函数： createServer 。
// 这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，
// 这个方法有一个数值参数，指定这个HTTP服务器监听的端口号
// http.createServer(function (request,response) {
//     response.writeHead(200,{"Content-Type":"text/plain"});
//     response.write("Hello world!   Node.js是事件驱动的");
//     response.end();
// }).listen(8888);
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log('serverjs Request for ' + pathname + ' received');
        request.setEncoding("utf8");
        request.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
            console.log('Received POST data chunk ' + postDataChunk);
        })
        request.addListener("end",function () {
            route(handle, pathname, response, postData);
        })
        // var content = route(handle, pathname);
        //
        // response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
        // response.write(content);
        // response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('serverjs sever has started');
}

exports.start = start;