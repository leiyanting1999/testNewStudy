var fs = require("fs")
var rs = fs.createReadStream("D:\\js学习内容\\尚硅谷NodeJS教程\\源码、笔记\\源码&笔记\\源码&笔记\\02\\source\\source\\02.文件系统\\a.mp3")
var ws = fs.createWriteStream("b.mp3")
rs.once("open",function () {
    console.log("流式读取开始")
})
ws.once("open",function () {
    console.log("流式写入开始")
})
//如果要读取可读流的数据,必须要给可读流绑定一个data事件,data事件绑定完毕直接开始读取数据

//pipo()可以将可读流的直接写入可写流中
rs.pipe(ws)

rs.once("close",function () {
    console.log("流式传输关闭")
})

ws.once("close",function () {
    console.log("可写流关闭")
})

fs.unlinkSync("b.mp3")