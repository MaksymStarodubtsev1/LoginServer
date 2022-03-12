const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const name = 'name'
    console.log('HELLO')

    res.send(
        {
        description: `${Object.keys(req)}`,
        value: books
    });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));