const express = require('express');
const app = express();

const compression = require('compression');
app.use(compression());

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(process.env.PORT || 8080, () => console.log(`listening on 8080...`));
