// in NodeJs each file is treated as seperate module

// this fun allows to make a request 
// we'll break out the details of request & response into seperate files

const request = require('./request');
const response = require('./response');

function makeRequest(url, data){
    request.send(url, data)
    return response.read();
}

makeRequest('https://google.com', 'hello')