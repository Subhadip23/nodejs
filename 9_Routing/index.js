const http=require('http');
const server =http.createServer((req,res)=>{
    // console.log(req.url('url')); //this for just check which Path User hit like /about & /contact
    // res.end('Hello');
    if(req.url==='/'){
        res.end("Home Page")
    }
    else if(req.url==="/about"){
        res.end("about Page")
    }
    else if(req.url==='/contact'){
        res.end("contact Page")
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>error</h1>")
    }
});

server.listen(8000)