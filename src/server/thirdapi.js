
async function getImage(whichcity){
    const baseURLimage = 'https://pixabay.com/api/?key=';
    const imagekey = '14839721-018cdf8eb34520de807d662c3';
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
