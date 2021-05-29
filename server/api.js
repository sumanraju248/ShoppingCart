const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let items = [{
    'id': 1,
    'name': 'Item1',
    'price': '20 USD',
    'quantity': 1,
    'active': true
    },
    {
    'id': 2,
    'name': 'Item2',
    'price': '21 USD',
    'quantity': 1,
    'active': true
    },
    {
    'id': 3,
    'name': 'Item3',
    'quantity': 1,
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

app.listen(port, () => console.log(`Shopping Cart App listening on port ${port}!`));