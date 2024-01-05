const http=require('http');
const httpProxy=require('http-proxy');
const dotenv=require('dotenv');
dotenv.config({path:'config.env'});

const proxy=httpProxy.createProxyServer({});

http.createServer((req,res)=>{
    console.log(`Request URL: ${req.url}`);
    console.log(`Request headers : ${JSON.stringify(req.headers)}`);
    console.log(`Request body : ${JSON.stringify(req.body)}`);

    proxy.web(req,res,{
        target:req.url,
        headers:req.headers,
    });

}).listen(process.env.PORT);

console.log(`Proxy server listening on port ${process.env.PORT}`);