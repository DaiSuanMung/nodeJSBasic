// create a new sercver

const casual = require("casual")

const http = require("http")
const server = http.createServer((req,res)=>{
    res.end(casual.sentence)
})
server.listen(4000, ()=>{
    console.log("your server start at 4000")
})