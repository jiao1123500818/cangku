var http=require("http");
http.createServer((req,res)=>{
	console.log('hello')
	           //状态码  文本类型   text/html  编码格式
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
	//结束响应
	res.end('asda  沈鑫是沙雕')
	//listen 监听      端口     回调函数
}).listen(3000)
