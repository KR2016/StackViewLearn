var express = require('express');
var app = express();

app.get('/',function(req,res){
    console.log(__dirname);
    res.send('this is main page');
});


app.use(express.static(__dirname+'/public'));

app.listen(3000,function () {
    console.log('Server is running...');
});



