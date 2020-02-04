var http = require('http');

function onres(req,res){
  res.write('helo');
  res.end();
  console.log('h');
}

http.createServer(function (req,res){
  onres(req,res);
}).listen(2109);

console.log('started');
