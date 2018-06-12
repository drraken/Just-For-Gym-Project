const express = require('express')
const path = require('path'),
  app = express(),
const PORT = process.env.PORT || 5000,
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

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  