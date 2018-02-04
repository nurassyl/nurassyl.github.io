const
config = require('./package.json').config,
port = Number(process.env.WEBPACK_PORT || config.port),
static = require('node-static'),
file = new static.Server('./dist');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);

console.log(`Server started with port "${port}"`);
