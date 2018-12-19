var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// 連接mlab
require('./config/database.js');


require('./app/routes.js')(app);



app.use(express.static(__dirname+'/public'));

//launch==================================================
app.listen(port,function () {
    console.log('Server is running on port ' + port + '..........');
});



