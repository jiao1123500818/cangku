var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	fs.redaFile("./index.txt",(err,data)=>{
		if(err){
			throw err
		}
		console.log(data.toString())
		res.end(data)
		
	})
}).listen(3000)
