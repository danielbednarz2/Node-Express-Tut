// readFile is Async

import { readFile } from 'fs'

console.log('started first task')

readFile('./Content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')


// setTimeout as an Async function

console.log('first')
setTimeout(() => {
    console.log('second')
}, 0)
console.log('third')


// setInterval is Async, 
// runs everything after hoisting 
// then runs the setInterval

setInterval(() => {
    console.log('hello world')
}, 2000)
console.log('I will run first')


// Defining server callbacks

import http from 'http'

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log('Server listening on port 5000...')
})