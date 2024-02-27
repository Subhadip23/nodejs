/* 
   API is the acronym for application programming interface,
   which is a software intermediary that allows two applications to talk to each other.
   Each time you use an app like Facebook.
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.end('hello Home Page');
   }
   else if (req.url === '/about') {
      res.end('this is about page');
   }
   else if (req.url === '/userapi') {
      fs.readFile(`${__dirname}/userApi.json`, 'utf-8', (err, data) => {
         if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1>');
            return;
         }

         console.log(data);
         res.writeHead(200, { 'Content-type': 'application/json' });
         res.end(data);
      });
   }
   else {
      res.writeHead(404, { 'Content-type': 'text/html' });
      res.end('<h1>404 error pages </h1>');
   }
});

server.listen(8000, '127.0.0.1', () => {
   console.log("port open");
});
