var fs = require("fs")
var ws = fs.createWriteStream("hello.txt")
//通过监听流的open和closs事件来监听流的开关
ws.once("open",function () {
    console.log("流打开了")
})
ws.once("close",function () {
    console.log("流关闭了")
})
ws.write("3")
ws.write("2")
ws.write("1")
ws.end(function () {
    console.log("传输结束")
})