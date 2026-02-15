//Read from a file a and showing it on a server.

const http = require('http');
const fs = require('fs')


const server = http.createServer((req, res) => {
    const ourReadStream = fs.ReadStream(`${__dirname}/bigdata.txt`)

    ourReadStream.pipe(res)
    
});

server.listen(3000)

console.log("The server is running on port 3000.....")