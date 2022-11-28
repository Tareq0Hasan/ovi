var http= require('http');
var fs= require('fs');



var server = http.createServer(function(req,res){

if(req.url='/'){

    
    fs.readFile('demo.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    })

}



})
server.listen(5050);
console.log('this is running');