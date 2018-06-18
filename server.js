var express = require('express');
var app = express();
var port = process.env.PORT || 3006;
var mongoose = require('mongoose');
var Task = require('./api/models/jfgModel');
var bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://draken:123qwe@ds161740.mlab.com:61740/justforgym');
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


app.listen(port);
console.log('JFG RESTful API server started on: ' + port);

//pobiera dane z bazy danych
function CheckTheData(l, p) {
    fetch('http://localhost:'+port+'tasks')
        .then(response => {
            return response.json()
        })
        .then(data => sendData(data, l, p));
}

//funckja sprawdzajaca czy dane zgadzaja sie ze soba
function sendData(thing1, l, p) {
    let valid = false;
    thing1.forEach(element => {
        if (element.login == l && element.password == p) {
            valid = true;
        }
    })
    if (valid) {
        alert('Hello ' + l)
        window.location.replace("index");
    } else {
        alert('Wrong login data!');
    }
}

const button = document.getElementById('submit-login');
//tworzy event na kilkniecie i pobiera wprowadzone dane przez uzytkownika
button.addEventListener('click', (e) => {
    e.preventDefault();
    let login = document.getElementById('login-box').value;
    let password = document.getElementById('password-box').value;

    CheckTheData(login, password);

})