
const express = require('express');
const path = require('path');
const port = process.env.PORT||3005;

const app = express();
app.use('/static', express.static('public'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log(
    'Listening on port 3005')
    );