
var mongoose = require('mongoose');
mongoose.connect('mongodb://kuolun:kuolun@ds139937.mlab.com:39937/practice');

var CatSchema = new mongoose.Schema({
    name:String,
    age:Number,
    type:String
});

var Cat = mongoose.model('Cat',CatSchema);

// adding a cat to DB

// var Kitty = new Cat({
//     name:'Garfield!',
//     age:159,
//     type:'incredible'
// });

// Kitty.save(function(err,cat){
//     if(err){
//         console.log('err happened!');
//         console.log(err);
//     }else{
//         console.log(cat);
//     }
// });

// Cat.create({
//     name:'test12',
//     age:99,
//     type:'test'
// },function(err,cat){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(cat);
//         Cat.find({},function(err,cats){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(cats);
//             }
//         });
//     }
// });

