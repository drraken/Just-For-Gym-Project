var express = require('express'),
var path = require('path')
  app = express(),
  port = process.env.PORT || 5000,
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


app
  .use(express.static(path.join(__dirname, './app/css')))
  .set('views', path.join(__dirname, './app'))
  .set('view engine', 'html')
  .get('app/index', (req, res) => res.render('index'))
  
