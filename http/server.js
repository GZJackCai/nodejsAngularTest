/**
 * Created by Jack on 2015/12/19.
 */

var http=require('http');
//创建一个http服务器 请求 响应
http.createServer(function(req,res){
    res.write('hello client');
    res.end('over');
}).listen(8080);