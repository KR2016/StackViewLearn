var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200);
    response.write('<h1>I create a Server</h1>');
    response.end();
}).listen(3000,function(){
    console.log('server is running...');
});

  