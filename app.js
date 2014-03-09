var restify  = require('restify');

var server = restify.createServer({name: 'node-rest'});

server.listen(3002,function(){
   console.log('%s listening at %s',server.name,server.url);
});


server
    .use(restify.fullResponse())
    .use(restify.bodyParser());

var products = {productId:1, name: "Apple"};

server.get('/products',function(req,res,next){
  res.send(products);
});

server.get('/product/:id',function(req,res,next){
    res.send(404,"Product not found : " + req.params.id);
});