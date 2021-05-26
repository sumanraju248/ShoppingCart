const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let items = [{
    'name': 'item1',
    'price': '20 USD',
    'active': true
    },
    {
    'name': 'item2',
    'price': '21 USD',
    'active': true
    },
    {
    'name': 'item3',
    'price': '22 USD',
    'active': false
    }
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/items', (req, res) => {
    res.json(items)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));