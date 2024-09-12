var express = require('express');
var app = express();
const PORT = 5100

//Imported Data
const peopleData = require('./data/people')
console.log(peopleData)
app.set('view engine', 'ejs');  

app.get('/', function(req, res) {
    let judgement = "Nerds will inherit the earth"
    res.render('pages/index',{
        people: peopleData,
        tagline: judgement
    });
})

// app.get('/about', function(req, res) {
//     res.render('pages/about');
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})