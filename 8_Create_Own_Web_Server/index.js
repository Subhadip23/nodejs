//////////////////////////Node.JS WEB Server/////////////////////

/*
    TO acccess web pages of any web applications ,you need a web server.
    The web server will handle all the http requests for the web applications 

    e.g IIs is a web server for asp..net web applictions and apachae is a web 
    server for PHP or Java web applications.

    Node.JS provieds capabilities to create your own web server which will handle Http
    requests asynchronously.You can use IIS or apache to run Node.Js web application
    but it is recommended to use Node.JS web Server. 
    

    1.the http.createServer() method includes reuest and response parameters which is supplied by Node.JS

    2.The request object can be used to get info about the current HTTP request
    e.g--> url,request header and data

    3.The response object can be used to sent a response for a current HTTp request.

    4.if the request for the HTTP server is supposed to be displayed as HTML
    you should include an HTTP header wih the correct content type:

*/

const http=require('http');
const server =http.createServer((req,res)=>{
    res.end('Hello');
});

// server.listen(8000)
// server.listen(8000,'127.0.0.1')  //localhost ip adress -->127.0.0.1
                                    //localhost:8000 or 127.0.0.1:8000 both are same 
server.listen(8000,'127.0.0.1',()=>{
    console.log('live server started');
})