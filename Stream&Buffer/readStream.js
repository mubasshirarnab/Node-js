const http = require('http');
const { chunk } = require('lodash');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html><head><title>Form</title></head>')
        res.write('<body><form method="post" action = "/process"><input name="text" /></form></body>')
        res.end()
    }
    else if(req.url === '/process' && req.method === 'POST'){
        req.on('data', (chunk) =>{
            console.log(chunk.toString())
        })

        res.write("Thank you for submitting your data")
        res.end()
    }
    else{
        res.write("Page Not Found.")
        res.end()
    }
});

server.listen(3000)

console.log("The server is running on port 3000.....")