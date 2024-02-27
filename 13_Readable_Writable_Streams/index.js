///////////Node.Js Streams////////////
/*
 Streams are objects that let you read data from a source or 
 write data to a destination in continuous fashion.In Node.js,there are four types of streams.
 
 Streaming means listening to music or watching video in 'real time', instead of downloading a file to your computer and watching it later.

 Readable  - Stream which is used for read operation.
 Writable  - Stream which is used for write operation.
 Duplex    - Stream which can be used for both read and write operation.
 Transform - A type of duplex stream where the output is computed based on input.


 Each type of Stream is an Event Emitter instance and throws several events at different instance of times. 
 For example, some of the commonly used events are --->
  data   - This event is fired when there is data is available to read.
   end   - This event is fired when there is no more data to read.
  error  - This event is fired when there is any error receiving or writing data.
  finish - This event is fired when all the data has been flushed to underlying system
*/

// const fs=require('fs');
// const http=require('http');
// const server =http.createServer();
// server.on('request',(req,res)=>{
//   var fs=require('fs');
//   fs.readFile('input.txt',(err,data)=> {
//     if(err){
//       return console.err(err); 
//     }
//     res.end(data.toString())
//   });
// })

// server.listen(8000)

// ---------------------------------------

// const fs = require('fs');
// const http = require('http');

// const server = http.createServer((req, res) => {
//   const readableStream = fs.createReadStream('input.txt', 'utf8');

//   readableStream.on('data', (chunk) => {
//     console.log(chunk);
//     res.write(chunk);
//   });

//   readableStream.on('end', () => {
//     console.log('End of stream');
//     res.end();
//   });

//   readableStream.on('error', (err) => {
//     console.error(err);
//     res.end('file not found');
//   });
// });

// const PORT = 8000;
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });


//-------------------Writable Stream---------------------------
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  const writableStream = fs.createWriteStream('input.txt', { encoding: 'utf8' });

  // Write some data to the writable stream
  writableStream.write('Hello, this is some data.\n');
  writableStream.write('More data to follow.\n');

  // End the writable stream
  writableStream.end();

  // Handle events on the writable stream
  writableStream.on('finish', () => {
    console.log('Write operation finished.');
    res.end('Data written to output.txt');
  });

  writableStream.on('error', (err) => {
    console.error(err);
    res.end('Error writing data to file');
  });
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
