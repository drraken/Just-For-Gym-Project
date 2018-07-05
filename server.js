var express = require('express');
var app = express();
const port = process.env.PORT || 3006;
var mongoose = require('mongoose');
var Task = require('./api/models/jfgModel');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect("mongodb://draken:123qwe@ds161740.mlab.com:61740/justforgym");
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

function getPage(page, direction) {
    app.get(page, function (req, res) {
        res.render(direction);
    });
}

getPage('/', 'pages/index');
getPage('/login', 'pages/login');
getPage('/index', 'pages/index');
getPage('/about', 'pages/about');
getPage('/products', 'pages/products');
getPage('/customers', 'pages/customers');
getPage('/contact', 'pages/contact');
getPage('/create', 'pages/create');
getPage('/mycart', 'pages/mycart');






app.listen(port);
console.log('JFG RESTful API server started on: ' + port);
