var http = require('http') //引入http模块
var fs = require('fs') //读写
var server = http.createServer(function(req, res){
  try{
    var fileContent = fs.readFileSync(__dirname + '/static' + req.url)
    res.write(fileContent)
  }catch(e){
    res.writeHead(404, 'not found')
  }
  res.end()
})

server.listen(8080)
console.log('visit http://localhost:8080' )