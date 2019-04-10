var http=require('http');

//获取地址栏参数
var url=require('url');
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	console.log(req.url)
	   //true转换为对象
	   //url.parse 字符串    解析   
	var query=url.parse(req.url,true)
	console.log(query)
//	console.log(query.name)
//	console.log(query.age)
	
	
	//格式化
	var format=url.format({
  host:'http://localhost:3000',
  port: 3000,
  hostname: null,
  hash: null,
  search: '?name=shenxin&age=22',
  query: { name: 'shenxin', age: '22' },
  pathname: '/',
  path: '/?name=shenxin&age=22',
  href: 'http://localhost:3000' 
	})
	console.log(format)
	res.end('ccccc')
}).listen(3000)
