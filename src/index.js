const express = require('express');
const bodyParser = require('body-parser');


const api = express();
api.use(express.static(__dirname + '/public'));
//creates directory for folder rather using './...'
api.use(bodyParser.json());
//JSON is going to parse the data you get and add it to the request body parameter

api.listen(3000, () => {
console.log('API up and running!')
});


api.post('/add', (req, res) => {
    console.log(req.body);
    res.send('it works!');
});
//post request
//send request when we add a new item
//first add router string 
//then callback function
//first post route


