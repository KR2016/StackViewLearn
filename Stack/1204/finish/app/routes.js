module.exports = function(app){
    //model
    var Category = require('./models/category');

    app.get('/',function(req,res){
        res.send('my first server');
    });

    app.get('/about',function(req,res){
        res.send('my about page');
    });

    app.post('/addCategory',function(req,res){
        var category = new Category();
        category.name = req.body.name;

        category.save(function(err,category){
            res.json({
                category:category
            });
        });
    });   

    app.get('/categories/all', function(req, res) {
        //空{}代表傳回categories下所有document
        Category.find({}, function(error, categories) {
            if (error) {
                return res.status(500).
                json({
                    error: error.toString()
                });
            }
            res.json({
                categories: categories
            });
        });
    }); 

    app.get('/category/id/:id', function(req, res) {
        // 用Category Model去找data
        // 對應的collection為categories
        Category.findOne({
            _id: req.params.id
        }, function(error, category) {
            //錯誤處理
            if (error) {
                // internal server error
                return res.status(500).
                json({
                    error: error.toString()
                });
            }
            //category不存在
            if (!category) {
                // data not found
                return res.status(404)
                    .json({
                        error: 'Not found'
                    });
            }
            //有data就回傳json
            res.json({
                category: category
            });
        });
    });

    //id對應category，取得某一目錄下所有products
    app.get('/products/:id', function(req, res, next) {
        Product
            .find({
                category: req.params.id
            })
            // 將category path替換成對應的資料
            .populate('category')
            .exec(function(err, products) {
                if (err) return next(err);
                // 取到資料就回傳json
                res.json({
                    products: products
                });
            });
    });

    //取得所有product
    app.get('/productsall/', function(req, res) {
        //空{}代表傳回Category下所有document
        Product.find({})
            .populate('category')
            .exec(function(error, products) {
                if (error) {
                    return res.status(500).
                    json({
                        error: error.toString()
                    });
                }
                res.json({
                    products: products
                });
            });
    });

    //用id找特定product
    app.get('/product/:id', function(req, res) {
        Product.findById({
            _id: req.params.id
        }, function(err, product) {
            if (err) return next(err);
            //回傳json
            res.json({
                product: product
            });
        })
    });        

    
};

