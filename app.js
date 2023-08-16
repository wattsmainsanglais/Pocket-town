const express = require('express');
const app = express();
require('dotenv').config;
const bodyParser = require ('body-parser')


const port = process.env.PORT || 4000;

app.use(express.static('views'))

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    
    
    res.render('../views/index');
});






app.listen(port, () => {
    console.log('Server is listening on Post 4000');

})