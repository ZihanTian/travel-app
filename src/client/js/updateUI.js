async function updateUI () {
    const fetch = require('node-fetch');
    const req = await fetch('http://localhost:8081/all')
    //console.log('where are you')
    try{
        const allData = await req.json()
        //console.log(allData,'here i am');
        document.getElementById('insertimage').innerHTML = `<figure id="imagesize"><img src="${allData.imageurl}" alt="" ><figcaption>Your Destination</figcaption></figure>`
        document.getElementById('insertword').innerHTML = `
        <p>Your trip to ${allData.city} will start in ${allData.future} days</p>
        <p>Your trip in ${allData.city} are ${allData.duration} days</p>
<p>The temperature in ${allData.city} will be ${allData.temperature}</p>
<h4>Weather Summary</h4>
<p>${allData.summary}</p>
        `

    }catch(error){
        console.log("error",error)
    }
}
module.exports = updateUI;
