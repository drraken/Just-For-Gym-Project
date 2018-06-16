var express = require('express');
var url = process.env.MONGODB_URI;
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var Task = require('./api/models/jfgModel');
var bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('url');

mongoose.connection.once('open', function () {
    console.log('Connection has been made, ')
}).on('error', function (error) {
    console.log('Connection error:', error);
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var routes = require('./api/routes/jfgRoutes');
routes(app);

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
   res.render('pages/index'); 
});
app.get('/login', function(req, res){
   res.render('pages/login'); 
});
app.get('/mycart', function(req, res){
   res.render('pages/mycart'); 
});
app.get('/index', function(req, res){
   res.render('pages/index'); 
});
app.get('/about', function(req, res){
   res.render('pages/about'); 
});
app.get('/products', function(req, res){
   res.render('pages/products'); 
});
app.get('/customers', function(req, res){
   res.render('pages/customers'); 
});
app.get('/contact', function(req, res){
   res.render('pages/contact'); 
});
app.get('/create', function(req, res){
   res.render('pages/create'); 
});


app.listen(port, function(){
    console.log('App running on heroku:' + port);
});