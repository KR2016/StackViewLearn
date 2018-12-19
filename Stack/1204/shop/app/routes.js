module.exports = function(app){
    app.get('/',function(req,res){
        res.send('my first server');
    });

    app.get('/about',function(req,res){
        res.send('my about page');
    });

    
};

