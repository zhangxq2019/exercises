var http = require('http')
// 通过require加载一个模块
// 整个服务器由nodejs的http模块实现的

// 通过nodejs去创建一个server，内部会创建服务器，请求会被封装成对象（即参数）
var server = http.createServer(function(request,response){
    // request这次请求所附带的信息，response这次请求返回的信息
    // console.log(request)
    console.log('jirengu') //在终端输出jirengu
    // 通过设置setHeader设置响应头
    response.setHeader('content-Type','text/html;charset=utf-8');
    response.write('<h1> hello world</h1>')
    response.end()
    // 响应体就是html(查看源代码)
}) 
server.listen(9000) //终端号
// 想运行多个nodejs的网站就需要不同的端口
