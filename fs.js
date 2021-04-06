//FS Module

const fs = require('fs');
fs.writeFileSync('myfile.txt','Hello Programmers');
fs.appendFileSync('myfile.txt',' How are you?');

const data = fs.readFileSync('myfile.txt');
    console.log(data.toString());

//Asyncrous
fs.readFile('myfile.txt',(err,data) => {
    console.log(data.toString());
});