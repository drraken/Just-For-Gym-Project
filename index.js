const express = require('express'),
const path = require('path'),
var ejs = require('ejs'),
const PORT = process.env.PORT || 5000,
    app = express();

/*express()
  .use(express.static(path.join(__dirname, 'app')))
  .set('views', path.join(__dirname, 'app'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))*/

app.use(express.static(__dirname + 'app'));
app.set('views', __dirname + 'app');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('app/index.html');
});

app.listen(app.get('port'), function() {
  console.log('The app is live on port' + app.get('port'));
});