// const ovi=[1,'e'];
//  function add_num(x,y,...m ){
// let sum=0;
// for(i of m){
// sum=sum+i;
// }
// console.log(x,y,sum);

//  }
// add_num(1,2,3,4,5,6,7);






var http = require('http');
var URL= require('url');

var server= http.createServer(function(req,res){
// if(req.url='/'){
//     res.writeHead(400,{'content-type':'text/html'});
//     res.write('<h1> this is first one </h1>')
//     res.end();
// }

var myurl ="https://ostad.app/dashboard/my-courses/63202ce744c5e613ea5c96cb/videos";

var myurlobj= URL.parse(myurl,true);
var hostname= myurlobj.hostname;
var host= myurlobj.host;
var path_name= myurlobj.pathname;

res.writeHead(200,{'content-type':'text/html'});
//res.write(hostname);
//res.write(host);
res.write(path_name);
res.end();

 })

 server.listen(4040);
 console.log('server is runnning');