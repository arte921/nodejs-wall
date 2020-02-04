var http = require('http');
var fs = require('fs');
var page;
http.createServer(function (req,res){
    try{
      if(req.url != '/'){
        page = fs.readFileSync('.' + req.url).toString();
      }else{
        page = fs.readFileSync('./index.html').toString();
      }
    }catch{
      page = '404';
    }
  console.log(req.url);
  res.write(page);
  res.end();
}).listen(2109);

console.log('started');
