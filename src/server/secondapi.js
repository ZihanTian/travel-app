async function getWeather (lng,lat,departtime,nowtime){
    const fetch = require('node-fetch');
    const baseURLDark = 'https://api.darksky.net/forecast/';
    const dotenv = require('dotenv');
    dotenv.config();
    const Darkapikey = process.env.darkkey;

    // decide to fetch the future data or current data
    if(departtime-nowtime>604800){
        const res = await fetch(`${baseURLDark}${Darkapikey}/${lat},${lng},${departtime}`)
        //console.log(`${baseURLDark}${Darkapikey}/${lat},${lng},${departtime}`)
        try {
    
            const data = await res.json();
            
            const weathersummary = 'Your departing date is more than a week away from now. Weather may vary.';
            const temperature = data.currently.temperature;
            //console.log(data,'second api data of sum and temp')
            return [weathersummary,temperature];
        }  catch(error) {
            console.log("error", error);
            // appropriately handle the error
        }
    } else{
        const res = await fetch(`${baseURLDark}${Darkapikey}/${lat},${lng}`)
        try {
    
            const data = await res.json();
            const weathersummary = data.currently.summary;
            const temperature = data.currently.temperature;
            //console.log(weathersummary,temperature,'second api data of sum and temp')
           
            return [weathersummary,temperature];
        }  catch(error) {
            console.log("error", error);
            // appropriately handle the error
        }
    }
    
    
}
module.exports = getWeather