//path Module

const path = require('path');
const myPath = '/home/kawsar/Documents/Node-Js-Basic/index.js';

console.log(path.parse(myPath));

//OS Module

const os = require('os');
console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus());

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