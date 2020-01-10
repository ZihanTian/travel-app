
async function getCoordinates (yourcity){
    const dotenv = require('dotenv');
    dotenv.config();
    const fetch = require('node-fetch');
    const baseURL = 'http://api.geonames.org/searchJSON?q=';
    const username = process.env.user_name;
    const res = await fetch(`${baseURL}${yourcity}&maxRows=10&username=${username}`)
    try {

        const data = await res.json();
        const lng = data.geonames[0].lng;
        const lat = data.geonames[0].lat;
        //console.log(lng,lat,'datadatadata');
        return [lng,lat];
    }  catch(error) {
        console.log("error", error);
        //appropriately handle the error
    }
}
module.exports = getCoordinates;


