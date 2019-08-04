var http = require('http')
var path = require('path') //处理和转换url
var fs = require('fs') //读写文件
var url = require('url') //自动解析url获取信息

//  
function staticRoot(staticPath, req, res){
  console.log(staticPath)
  
  console.log(req.url) // index.html a.css b.js
  var pathObj = url.parse(req.url, true)
  console.log(pathObj)
  
  // 默认读index.html
  if(pathObj.pathname === '/'){
    pathObj.pathname += 'index.html'
  }
  

  

  var filePath = path.join(staticPath, pathObj.pathname)
  
  // var fileContent = fs.readFileSync(filePath,'binary')
  // res.write(fileContent, 'binary')
  // res.end()
  
  // 通过二进制异步读文件
  fs.readFile(filePath, 'binary', function(err, fileContent){
    if(err){
      console.log('404')
      res.writeHead(404, 'not found')
      res.end('<h1>404 Not Found</h1>')
    }else{
      console.log('ok')
      res.writeHead(200, 'OK')
      // 通过二进制方式将文件内容发出去
      res.write(fileContent, 'binary')
      res.end()      
    }
  })
  

}

console.log(path.join(__dirname, 'static'))

var server = http.createServer(function(req, res){
  // staticRoot把一个路径当成静态的路径，把路径名、req、res传递进去
  // path.join(__dirname, 'static')自动生成文件绝对路径
  staticRoot(path.join(__dirname, 'static'), req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080' )