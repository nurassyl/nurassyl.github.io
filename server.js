const
config = require('./package.json').config,
static = require('node-static'),
file = new static.Server('./dist');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(config.port);

console.log(`Server started with port "${config.port}"`);
