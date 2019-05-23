let express = require('express')

let app = express();

let apiRoutes = require("./api-routes")

app.use('/api', apiRoutes)

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Primeira página'));

app.listen(port, function () {
     console.log(port + ' rodando');
});
