const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('index.html'));
}).listen(port, '0.0.0.0');
console.log('Server running on port ' + port);
