const express = require('express'),
const path =require('path'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Task = require('./api/models/jfgModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<drraken1>:<4zuiui5y>@ds161740.mlab.com:61740/justforgym');

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


 app.use(express.static(path.join(__dirname, 'public')));
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'html');
 app.get('/', (req, res) => res.render('index'));
  

  
