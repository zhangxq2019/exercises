var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')

function staticRoot(staticPath,req,res){
  var pathObj = url.parse(req.url,true)
  if(pathObj.pathname === '/'){
    pathObj.pathname += 'index.html'
  }


var filePath = path.join(staticPath,pathObj.pathname)
fs.readFile(filePath,'binary',function(err,fileContent){
  if(err){
    res.writeHead(404,'not found')
    res.end('<h1>404 not found</h1>')
  }else {
    res.writeHead(200,'ok')
    res.write(fileContent,'binary')
    res.end()
  }
})
}
var server = http.createServer(function(req,res){
  staticRoot(path.join(__dirname,'static'),req,res)
})

server.listen(8080)
console.log('visit http://localhost:8080')