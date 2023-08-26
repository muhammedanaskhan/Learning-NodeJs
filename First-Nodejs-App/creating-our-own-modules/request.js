// since its 'https' we needa encrypt the data beforehand
function encrypt(data){
    return 'encrypted data'
}

// func to send it to a URL and some data
function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`)
}

// to use funcs in other modules
//module = Global built-in that contains data related to current module

export default {
    send,
} 