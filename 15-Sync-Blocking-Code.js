import http from 'http'

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home')
    } else if (req.url === '/about') {
        // Blocking (Synchronous) Code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} | ${j}`)
            }
        }
        res.end('About')
    } 
    res.end('Sorry no page here')
})

server.listen(5001, (e) => e ? console.log(e) : console.log('Server is listening on port 5001...'))