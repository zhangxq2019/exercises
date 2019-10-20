var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')

http.createServer(function(req,res){
  switch(req.url) {
    case '/getWeather':
    res.end(JSON.stringify({a:1,b:2}))
    break;
    case '/user/123':
      res.end(fs.readFileSync(__dirname + '/static/user'))
      break;
      default:
        res.end(fs.readFileSync(__dirname + '/static' +req.url))
  }
}).listen(8080)