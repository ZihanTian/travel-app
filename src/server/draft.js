
// get the url of image


getCoordinates(baseURL,formText.city,'ZihanTian')
.then(function(data){
    console.log(data,'hook up with api')
    if(departtime-nowtime>604800){
        getWeatherfuture(baseURLDark,Darkapikey,data[0],data[1],departtime)
        .then(function(data){
            console.log('get the weather data')
            document.getElementById('insertword').innerHTML=`<h4>Travel Planner</h4>
            <p>My travel is in ${parseInt((departtime-nowtime)/(3600*24))} days</p>
            ${data}`})

    }else{
        getWeather(baseURLDark,Darkapikey,data[0],data[1])
        .then(function(data){
            console.log('get the weather data')
            document.getElementById('insertword').innerHTML=`<h4>Travel Planner</h4>
            <p>My travel is in ${parseInt((departtime-nowtime)/(3600*24))} days</p>
            ${data[0]}`
            //<p>${formText.city} has temperature from ${data.daily.data["0"].temperatureLow} to ${data.daily.data["0"].temperatureHigh} </p>`
        })
    }
})

//.then(function(data){
//    document.getElementById('insertword').innerHTML=`<h4>Travel Planner</h4>
//    <p>My travel is in ${int((departtime-nowtime)/(3600*24))} days</p>
//    <p>${formText.city} has temperature from ${data.daily.data["0"].temperatureLow} to ${data.daily.data["0"].temperatureHigh} </p>`
//})
getImage(baseURLimage,imagekey,formText.city)
.then(function(data){
    // need to updateUI 
    console.log('get the image link')
    //document.getElementById('insertimage').innerHTML = `<img src="${data}" >`
})
