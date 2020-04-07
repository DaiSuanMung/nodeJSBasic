//Without callback

let fs = require("fs")

/*
let data = fs.readFileSync("example.json");
let student = JSON.parse(data)
console.log(student)

console.log("program end")
*/

fs.readFile("example.json",(error, data)=>{
    if(error) return console.log(error);
   const student = JSON.parse(data)
   console.log(student)
})

console.log("Program ended")