
async function getImage(whichcity){
    const baseURLimage = 'https://pixabay.com/api/?key=';
    const dotenv = require('dotenv');
    dotenv.config();
    
    const imagekey = process.env.imagekey;
    const fetch = require('node-fetch');
    const res = await fetch(`${baseURLimage}${imagekey}&q=${whichcity}`);
    try {
    
       const data = await res.json();
        //const imageurl = res;
        const imageurl = data.hits[0].largeImageURL;
        
        return imageurl;
    }  catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
}
module.exports = getImage;
