var express = require('express'),
  app = express(),
  port = process.env.PORT || 3009,
  mongoose = require('mongoose'),
  Task = require('./api/models/jfgModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/JFG');

mongoose.connection.once('open', function(){
    console.log('Connection has been made, ')
}).on('error', function(error){
    console.log('Connection error:', error); 
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/jfgRoutes');
routes(app);

app.listen(port);

console.log('JFG RESTful API server started on: ' + port);