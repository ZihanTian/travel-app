async function updateUI () {
    const fetch = require('node-fetch');
    const req = await fetch('/all')
    console.log('where are you')
    try{
        const allData = await req.json()
        console.log(allData,'here i am');
        
        //document.getElementById('date').innerHTML = allData.date;
        //document.getElementById('temp').innerHTML = allData[ind-1].temperature;
        //document.getElementById('temp').innerHTML = allData.temperature;

        //document.getElementById('content').innerHTML = allData[ind-1].user_response;
        //document.getElementById('content').innerHTML = allData.user_response;

    }catch(error){
        console.log("error",error)
    }
}
module.exports = updateUI;