// in NodeJs each file is treated as seperate module

// this fun allows to make a request 
// we'll break out the details of request & response into seperate files

import { send } from './request';
import { read } from './response';

function makeRequest(url, data){
    send(url, data)
    return read();
}

makeRequest('https://google.com', 'hello')