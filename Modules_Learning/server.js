const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Hello there! How are you doing?")
        res.end()
    }
    else if(req.url === '/about'){
        res.write("Hello from About Page...")
        res.end()
    }
    else{
        res.write("Page Not Found.")
        res.end()
    }
});

server.listen(3000)

console.log("The server is running on port 3000.....")