const http = require('http');
const url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;//http://localhost:8080/?year=2017&month=July the year and month will be copied into txt
    var txt = q.year + " " + q.month;//this is passed to res.end()
    res.end(txt);
}).listen(8080);