var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var morgan = require('morgan');
var bodyParser = require('body-parser');
//faker模組
var apiRoutes = require('./api/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(morgan('dev'));

// 連接mlab
require('./config/database.js');

//設定subroute for faker
//localhost:3000/api/xxx的就會進到apiRoutes去處理
app.use('/api', apiRoutes);

require('./app/routes.js')(app);




app.use(express.static(__dirname+'/public'));

//launch==================================================
app.listen(port,function () {
    console.log('Server is running on port ' + port + '..........');
});



