// importing built-in Node 'http' module
const http = require('http');

//                                                callback function
const req = http.request('http://www.google.com', (res) => {
    res.on('data', (chunk) =>{
        console.log(`data chunk : ${chunk}`)
    })
    res.on('end', () => {
        console.log('no more data')
    })
})

req.end()

