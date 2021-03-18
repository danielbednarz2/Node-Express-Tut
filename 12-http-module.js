const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome home')
    }
    if (req.url === '/about') {
        res.end('About Home')
    } 
    res.end(`<h1>Ooops</h1>`)
})

server.listen(5000, console.log('Your app is running on port 5000'))