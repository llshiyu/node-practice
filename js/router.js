function route(handle, pathname, response, request) {
    // console.log('routerjs About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request)
    } else {
        // console.log("routerjs No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain;charset=utf-8"});
        response.write('404页面');
        response.end();
        // return '404页面';
    }
}

exports.route = route;