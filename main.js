var http = require('http');
var fs = require('fs');
var page;
var port = 2109;
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
}).listen(port);

console.log('started on port ' + port);
