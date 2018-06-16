var express = require('express');
//var path = require('path');
var app = express();
//var port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var Task = require('./api/models/jfgModel');
var bodyParser = require('body-parser');
//var ejs = require('ejs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<drraken1>:<4zuiui5y>@ds161740.mlab.com:61740/justforgym');

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

//app.listen(port);

//console.log('JFG RESTful API server started on: ' + port);

/*
app.use(express.static(path.join(__dirname, 'app')));
app.set('views', path.join(__dirname));
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
    response.render('index');
})*/

app.use(express.static(__dirname + '/app'))
app.listen(process.env.PORT || 5000);
module.exports = {app}