// add necessary modules 
var http = require('http');
var qs = require('querystring');
 
// my_server.js
//var http = require('http');
//http.createServer(function handler(req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello World\n <h1>Node.js!</h1>');

// build a simple form


var pageHTML = '<html>' +
  '<head>' +
    '<title> *** User Creation Menu ***</title>' +
    '<meta charset="utf-8">' +
     '<title> *** User Creation Menu ***</title>' +
  '</head>' + 
    '<title> *** User Creation Menu ***</title>' +
  '<meta charset="utf-8">' +
  '<body>' +
    '<form method="post" action="">' +
     '<div>' +
         '<label for=" *** User Creation Menu ***"> *** User Creation Menu ***</label>' + 
      '<div>' +
        '<label for="User">User:</label>' +
        '<input type="text" name="User">' +  
          '<div>' +
 '<label for="Password">Password:</label>' +        
'<input type="text" name="Password">' + 
      '</div>' +
      '<div>' +
        '<input type="submit" value="CREATE">' +
          '<input type="submit" value="EXIT">' +
      '</div>' +
    '</form>' +
  '</body>' +
'</html>';
 
// create server and process data

var server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
  var requestData = '';
 
  // check HTTP method and show the right content
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

      res.end('<h1>User creation was been success!!!' + '</h1>');
    });
  }
});
 
server.listen(1340, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1340/');

