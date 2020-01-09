
const dotenv = require('dotenv');
const cors = require('cors')
const fetch = require('node-fetch');
dotenv.config();
//console.log(`Your API key is ${process.env.API_KEY}`);
var path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))
app.use(cors())
//console.log(__dirname)
let getCoordinates = require('./firstapi');
let getWeather = require('./secondapi');
let getImage = require('./thirdapi');
var inputCity

var issummary
var istemperature
var imageurl
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', function (req, res) {
    const departtime = req.body.departtime;
    const nowtime = req.body.nowtime;
    inputCity = req.body.city;
    //console.log(inputCity, departtime, nowtime,'therererere')
    getCoordinates(inputCity)
    .then(data=>getWeather(data[0],data[1],departtime,nowtime)
    )
    .then(function(data){
        issummary = data[0];
        istemperature = data[1]
        //console.log(issummary,istemperature)
    })
    .then(data=>getImage(inputCity))
    .then(function(data){
        imageurl = data;
        //console.log(imageurl,'catch you!')
        console.log({imageurl: imageurl, summary: issummary, temperature: istemperature});
    })
        
})


app.get('/all', function(req,res){
    console.log('touch here')
    res.send({imageurl: imageurl, summary: issummary, temperature: istemperature})
});




