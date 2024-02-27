const fs=require('fs');
const http=require('http');
const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');

const overview =fs.readFileSync(`${__dirname}/templates/overview.html`,'utf-8')

const Card=fs.readFileSync(`${__dirname}/templates/card.html`,'utf-8');

const Product=fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8')
const dataobj=JSON.parse(data);

const server=http.createServer((req,res)=>{
    const pathname=req.url;

    //overview
    if(pathname==='/' || pathName==='/overview'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.end(overview)
    }
});
server.listen(8000)