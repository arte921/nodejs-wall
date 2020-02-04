var http = require('http');
var fs = require('fs');

var page;

http.createServer(function (req,res){

  try{
    page = fs.readFileSync('.' + req.url).toString();
  }catch{
    page = '404';
  }


  console.log(req.url);


  res.write(page);
  res.end();
}).listen(2109);

console.log('started');
