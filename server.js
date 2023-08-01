const
	// packages
	path = require('path'),
	fs = require('fs'),
	express = require('express'),
	// config
	PORT = process.env.PORT || 3000,
	basePath = path.resolve(__dirname, '.'),
	// server
	server = express();

// HTTP Server
server.use(express.static(basePath));
server.get('*', function(req, res) {
	const content = fs.readFileSync(basePath+'/index.html', 'utf-8');
	res.write(content);
	res.end();
});
server.listen(PORT, function() {
	console.log('HTTP server started in port: '+PORT);
});
