//引入mongoose
var mongoose = require('mongoose');

// 需填入user/pwd
var dbURI = "";

//連到mlab
mongoose.connect(dbURI);


// create Schema
// var CatSchema = new mongoose.Schema({
//     name:String,
//     age:Number,
//     type:String
// });

// var Cat = mongoose.model('Cat',CatSchema);

// add a Cat to DB 

// var Kitty = new Cat({
//     name:'Gafield',
//     age:99,
//     type:'funny'
// });

// Kitty.save(function(err,cat){
//     if(err){
//         console.log('err happened:');
//         console.log(err);
//     }else{
//         console.log(cat);
//     }
// });

// Cat.find({},function(err,cats){
//     console.log(cats);
// });


//monitor connect
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});

//monitor connection error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error  ' + err);
});