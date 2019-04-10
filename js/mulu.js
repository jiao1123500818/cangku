var http=require("http");
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	
	//创建目录
	
//  fs.mkdir("./aaa",(err)=>{
//  	if(err){
//  		throw err
//  	}
//  	console.log("成功")
//  	res.end()
//  })
    //删除目录
//  fs.rmdir("./aaa",(err)=>{
//  	if(err){
//  		throw err
//  	}
//  	console.log("删除成功")
//  	res.end()
//  })
    
    //修改名称
//  fs.rename("./aaaa","../css",(err)=>{
//  	if(err) throw err
//  	console.log("修改成功")
//  	res.end()
//  })
    
    //删除文件   unlink
    
    //判断某个文件是否存在，如果存在什么都不做，不存在则创建
//  fs.exists("./css",(exists)=>{
//  	if(exists){
//  		console.log("该文件已存在")
//  	}else{
//  		fs.mkdir("./css",(err)=>{
//  			if(err){
//  		throw err
//  	}
//  	console.log("创建成功")
//  	res.end()
//  		})
//  	}
//  })
    
    //读取文件夹信息
//  fs.readdir("../js",(err,data)=>{
//  	if(err) throw err
//  	console.log(data)
//  	res.end()
//  })
    
    //判断是文件还是文件夹
//  fs.stat("../js",(err,stats)=>{
//  	if(err) {
//  		throw err
//  	}else{
//  		if(stats.isDirectory()){
//  			console.log("是")
//  			res.end()
//  		}else{
//  			console.log("不是")
//  			res.end()
//  		}
//  		
//  	}
//  		
//  	
//  })	
    
    fs.readdir('../css',(err,data)=>{
    	if(err) throw err
    	(function item(i){
    		fs.stat('../css',(err,stats)=>{
    			if(err) throw err
    		if(stats,isDirectory()) console.log(data[i])
    		res.end()
    		})
    		
    	
    	console.log(i)
    	if(i<data.length-1){
    		i++;
    		item(i);
    	}
    	})(0)
//  	for(let i=0;i<data.length;i++){
//  		fs.stat('../css/'+data[i],(err,stats)=>{
//  			if(err) throw err
//  		if(stats.isDirectory()){
//  			console.log(data[i])
//  			res.end()
//  		}
//  		})
//  		
//  	}
       res.end()
    })
}).listen(3000)
