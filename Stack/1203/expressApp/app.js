var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('this is the main page!');
});

app.get('/about',function(req,res){
    res.send('this is about page');
});

app.listen(3000,function(req,res){
    console.log('Server is running....');
});