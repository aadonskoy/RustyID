var WebSocket = require("ws");

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/static'));
app.listen(8888);