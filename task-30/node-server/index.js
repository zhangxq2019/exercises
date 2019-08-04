var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')

function sampleRoot(samplePath,req,res){
    var pathObj = url.parse(req.url,true)

    if(pathObj.pathname === '/'){
        pathObj.pathname += 'test.html'
    }

var filePath = path.join(samplePath,pathObj.pathname)
fs.readFile(filePath,'binary',function(err,fileContent){
    if(err){
        res.writeHead(404,'Not found')
        res.end('<h1>Not found</h1>')
    }else {
        res.writeHead(200,'ok')
        res.write(fileContent,'binary')
        res.end()
    }
})
}
var server = http.createServer(function(req,res){
    sampleRoot(path.join(__dirname,'sample'),req,res)
})

server.listen(9000)
console.log('visit http://localhost:9000')