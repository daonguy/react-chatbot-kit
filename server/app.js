/*eslint-env node*/
var express = require('express');
var app = express();
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());


/*var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.path
}));

app.use(require('webpack-hot-middleware')(compiler));


//------------- UI Home Page --------------------
app.get('/chat', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});
*/

//------------------- APIs ----------------------
app.get('/api/v1/getChatHistory', function(req, res) {
  res.send([
    {
      text: 'Hello', id: '1', isBot: false,
    },
    {
      text: 'Howdy, How can I help you?', id: '2', isBot: true,
    }])
});


// start server on the specified port and binding host
app.set('port', 3000);
app.listen(app.get('port'), function() {
  console.log("Server starting on localhost:" + app.get('port'));
});