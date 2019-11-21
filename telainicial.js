// modulos de pagina
var http = require('http');
var qs = require('querystring');
 
var pageHTML = '<html>' +
  '<head>' +
    '<title>WebServer For Geometric Applications</title>' +
    '<meta charset="utf-8">' +
     '<title>WebServer For Geometric Applications</title>' +
  '</head>' + 
    '<title>WebServer For Geometric Applications</title>' +
  '<meta charset="utf-8">' +
  '<body>' +
    '<form method="post" action="">' +
      '<div>' +
        '<label for="</title>">WebServer For Geometric Applications\n\n</label>' +
       '<div>' +
       '<div>' +
        '<label for="User">User:</label>' +
        '<input type="text" name="User">' +  
          '<div>' +
 '<label for="Password">Password:</label>' +        
'<input type="text" name="Password">' + 
      '</div>' +
      '<div>' +
        '<input type="submit" value="OK">' +
          '<input type="submit" value="CREATE USER">' +
      '</div>' +
    '</form>' +
  '</body>' +
'</html>';
 
// criação de servidor node.js

var server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
  var requestData = '';
 
  // funcao para retornar valores do botão na pagina
  if (req.method === "GET") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(pageHTML); // serve our HTML code
  } else if (req.method === "POST") {
    req.setEncoding('utf-8');
 
    req.on('data', function(data) {
      requestData += data;
    });
 
    req.on('end', function() {
      var postData = qs.parse(requestData);
  res.writeHead(200, {'Content-Type': 'text/html'});

      res.end('<h1>Retorna Menu para USer valido ou criacao de user *** '+ postData.User + '</h1>');
    });
  }
});
 
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
