/* ---------------------------------~~~~~~~~~ Node JS  ~~~~~~~~~----------------------*/

/////////////////////////////Topic 1 :- Node.JS Core Module/////////////////////////////
/*consider module to be the same as Javascript Libraries .A set of functions you want to include in your application.

Node.JS has a set of build-in module which you can use without any further installation*/

//------
//Creating a new file(syns way)
const fs =require ('fs');
fs.writeFileSync('read.text','hi my name is subhadip');
//if you add some txt on same file(syns way)
fs.appendFileSync('read.text',' Mondal')
//------

// Reading a file(syns way)
/* 
node js includes an additional data type called Buffer,
Buffer is mainly used to store Binary Data
while reading from a file or receving packets over the network.
*/
const readFile =fs.readFileSync('read.text','utf-8')  //for remove Buffer error we used 'utf-8'
console.log(readFile);


// ReName the file(syns way)
fs.renameSync('read.text','myName.txt');