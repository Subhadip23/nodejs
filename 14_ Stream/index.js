/* ////////////Topic Cover////////////
1.Introduction(Theory)
2.Streams are not only for streaming videos/audios.(Theory)
3.understanding streams and buffers(Theory)
4.Create http server(Code)
5.Downloding big files from server(a good way and bad way)
6.copy files on files systems(a good way and bad way)
7.Create custom streams (readble/writeble/transform)
8.String processing (a good way and bad way)
9.Pipes
10.Types of streams
11.Handel errors in stream


*/

const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{

    if(req.url!=='/'){
        return res.end('not found');
    }


    // downing big file bad way.never use
    // const file=fs.readFileSync('sample.txt');
    // return res.end(file);
//---------------------


    // downing big file Good way
    // const readblestream=fs.createReadStream('sample.txt')
    // //what is pipe ?-->readbleStream to writebleStream
    // readblestream.pipe(res);

//---------------------

    //copy big file bad way.never use
    // const file=fs.readFileSync('sample.txt');
    // fs.writeFileSync('output.txt',file);
    // res.end();

//---------------------
    // copy big file good way.
    const readStream=fs.createReadStream('sample.txt');
    const writeStream=fs.createWriteStream('output.txt');

    readStream.on('data',(chunk)=>{
        writeStream.write(chunk);
    })
    res.end();
});
server.listen(8000);


//piping is a mechanism to connect the output of one stream to the input of another. Streams are a fundamental concept in Node.js that allow you to process data asynchronously in chunks.

const fs = require('fs');
// Create a readable stream (reading from a file)
const readableStream = fs.createReadStream('input.txt');
// Create a writable stream (writing to a file)
const writableStream = fs.createWriteStream('output.txt');
// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);
// Handle the 'finish' event to know when the piping is complete
writableStream.on('finish', () => {
  console.log('Piping is complete!');
});
