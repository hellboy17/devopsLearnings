const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demoHtml1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

fs.appendFile('./basic/myNewFile.txt', 'Hello World!', function(err){
    if (err) throw err;
    console.log('Saved!');
});

fs.open('./basic/myNewFile2.txt', 'w', function(err){
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile('./basic/myNewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.unlink('./basic/myNewfile.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});