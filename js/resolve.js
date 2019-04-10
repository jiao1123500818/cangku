var http=require("http");
var url=require("url")
http.createServer((req,res)=>{
	var zxc=url.resolve("http://127.0.0.1:3000/public","inde.html")
	console.log(zxc)
	res.end()
}).listen(3000)