var express = require('express');
var ejs = require('ejs');
var PORT = process.env.PORT || 5000;
var   app = express();
var path = require('path');

/*
express()
  .use(express.static(path.join(__dirname, 'app')))
  .set('views', path.join(__dirname, 'app'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .get('/', (req, res) => res.render('login'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/

express()
  .use(express.static(path.join(__dirname, 'app')))
  .set('views', path.join(__dirname, 'app'))
  .engine('html', ejs.renderFile)
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('index'))  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

/*app.use(express.static(path.join(__dirname, '/app')));
app.set('views', path.join(__dirname ));
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.get('/', function(request, response) {
  response.render('index');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));*/