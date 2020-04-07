//read JSON
/*
const fs = require("fs")

const data = fs.readFileSync("example.json")

const student = JSON.parse(data)

console.log(student)
*/
//write JSON

let fs = require("fs")

let student = {
    "name":"Sara",
    "age":23,
    "gender":"Female",
    "department":"History",
    "car":"Honda"
} 

let data = JSON.stringify(student);

const students = fs.writeFileSync("write.json", data)
console.log("succed")