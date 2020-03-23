let express    = require('express');
let app        = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000; // port番号を指定

var router = require('./routes/');
app.use('/api/v1/', router);

app.listen(port);
console.log('listen on port ' + port);
