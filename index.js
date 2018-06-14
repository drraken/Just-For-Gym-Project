var express = require('express');
var ejs = require('ejs');
var PORT = process.env.PORT || 5000;
var   app = express();

/*express()
  .use(express.static(path.join(__dirname, 'app')))
  .set('views', path.join(__dirname, 'app'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))*/
//

app.use(express.static(__dirname + 'app'));
app.set('views', __dirname );
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('index.html');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));