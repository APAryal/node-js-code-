// synchronous or blocking
// -line by line execution
// asynchronous or non blocking
// -line by line execution not guaranteed
// -callbacks will fire
const fs=require("fs");
fs.readFile("del.txt", "utf-8", (err,data)=>{
console.log(data);
});
console.log("this is a message");