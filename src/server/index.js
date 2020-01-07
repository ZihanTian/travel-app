
const dotenv = require('dotenv');
const cors = require('cors')
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
console.log(__dirname)
//var AYLIENTextAPI = require('aylien_textapi');
//var textapi = new AYLIENTextAPI({
//  application_id:process.env.API_ID, 
//  application_key: process.env.API_KEY
//});
var inputurl 
var inputCity
var inputDate
const baseURL = 'http://api.geonames.org/searchJSON?q='
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', function (req, res) {
    inputDate = req.body.date;
    inputCity = req.body.city;
    console.log(inputDate,inputCity)
    //console.log('hooking up with ist!')
    
    //getCoordinates(baseURL,inputCity,zihantian)
    //.then(function(res){
    //    console.log(res);
    //})
    
    
})
//const getCoordinates = async (baseURL, yourcity, username)=>{
//const res = await fetch(`${baseURL}${yourcity}&maxRows=10&username=${username}`)
//  try {

    //const data = await res.json();
    //console.log(data)
    //console.log(data.main.temp)
    //tempt = data.temperature;
 //   const lng = res.body.geonames[17];
 //   const lat = res.body.geonames[12];
 //   console.log(lng,lat);
 //   return data;
 // }  catch(error) {
 //   console.log("error", error);
    // appropriately handle the error
//  }
//}
//getCoordinates(baseURL,'London','zihantian')
//.then(function(data){
//    console.log('hook up with api')
//})

