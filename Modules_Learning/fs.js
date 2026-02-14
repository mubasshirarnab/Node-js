const fs = require('fs')

//Sync
fs.writeFileSync('myFile.txt', "Hello there!")   //write
fs.appendFileSync('myFile.txt', " How's life?")  //append


// const data = fs.readFileSync('myFile.txt')  //Sync read
// // console.log(data) --> will return in buffer format
// console.log(data.toString())


//Async read
fs.readFile('myFile.txt', (err, data) =>{
    console.log(data.toString())
} )  


console.log("Hello")  //For Async file read, Hello will print first