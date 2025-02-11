const http = require('http');
const dt = require('./firstModule');

//create a server object:
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    //res.write("The data and time is: " + dt.myDateTime());//write a response to the client
    
    res.write(req.url);//The function passed into the "http.createServer()" has a "req" argument that represents the request from the client, as an object (http.IncomingMessage object). This object has a property called "url" which holds the part of the url that comes after the domain name
    
    res.end();//end the response

}).listen(8080);//the server object listens on port 8080