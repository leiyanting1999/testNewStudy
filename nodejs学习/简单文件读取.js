var fs = require("fs")

fs.readFile("an.jpg",function (err,data ) {
    if(!err){
        console.log("读入成功")
        //将data写入到文件
        fs.writeFile("C:\\Users\\15045\\Desktop\\asdasdn.jpg",data,function (err) {
            if(!err){
                console.log("写入成功")
            }
        })
    }
})