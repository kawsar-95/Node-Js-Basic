const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url ==='/'){
    res.write('Hello Programmers!');
    res.write('How are You?');
    res.end()
    }
    else if(req.url === '/about'){
    res.write('This is about Page!');
    res.end()
    }
    else {
    res.write('NOT FOUND')
    res.end()
    }
});


server.listen(3000);
console.log('Listening on port 3000 ');