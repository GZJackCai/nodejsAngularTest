/**
 * Created by Jack on 2015/12/19.
 */

var http=require('http');
//����һ��http������ ���� ��Ӧ
http.createServer(function(req,res){
    res.write('hello client');
    res.end('over');
}).listen(8080);