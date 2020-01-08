const submitbutton = document.getElementById('submit');
submitbutton.addEventListener('click',function(){
    const nowtime = Math.round((new Date()).getTime() / 1000);
    const postData = async ( url = '', data = {})=>{
        console.log(data,'here')
          const res = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header        
        });
          console.log(res.body,'should finish the transform')
          try {
            const newData = await res.json();
            console.log(newData,'new try hello');
            return newData
          }catch(error) {
          console.log("error", error);
          // appropriately handle the error
          }
      }

    // check what text was put into the form field
    const formText ={date:document.getElementById('myDate').value,
                     city:document.getElementById('myCity').value}; 
    const departtime = new Date(formText.date).getTime() / 1000;

    
    const baseURL = 'http://api.geonames.org/searchJSON?q='
    postData('http://localhost:8081/test',formText)
    const getCoordinates = async (baseURL, yourcity, username)=>{
        const res = await fetch(`${baseURL}${yourcity}&maxRows=10&username=${username}`)
        try {
    
            const data = await res.json();
            //console.log(data)
            //console.log(data.main.temp)
            //tempt = data.temperature;
            console.log(data);
            const lng = data.geonames[1].lng;
            const lat = data.geonames[1].lat;
            console.log(lng,lat,'datadatadata');
            return [lng,lat];
        }  catch(error) {
            console.log("error", error);
            //appropriately handle the error
        }
        }
    const baseURLDark = 'https://api.darksky.net/forecast/';
    const Darkapikey = '99d9838d794f38deceedf7a1b281b874';
    const getWeatherfuture = async (baseURLDark,Darkapikey,lng,lat,departtime)=>{

        const res = await fetch(`https://cors-anywhere.herokuapp.com/${baseURLDark}${Darkapikey}/${lat},${lng},${departtime}`,
        
        {   method: 'get',
            //mode: 'no-cors',
            
            })
        try {
        
            const data = await res.json();
            console.log(data,'the second api data')
            //console.log(data.main.temp)
            //tempt = data.temperature;
            return data;
        }  catch(error) {
            console.log("error", error);
            // appropriately handle the error
        }
        }
    //let watherdata
    const getWeather = async (baseURLDark,Darkapikey,lng,lat)=>{

        const res = await fetch(`https://cors-anywhere.herokuapp.com/${baseURLDark}${Darkapikey}/${lat},${lng}`);
        try {
        
            const data = await res.json();
            console.log(data,'the second api daat')
            //console.log(data.main.temp)
            //tempt = data.temperature;
            return data;
        }  catch(error) {
            console.log("error", error);
            // appropriately handle the error
        }
    }
    // get the url of image
    const baseURLimage = 'https://pixabay.com/api/?key=';
    const imagekey = '14839721-018cdf8eb34520de807d662c3';
    const getImage = async (baseURLimage,imagekey,whichcity)=>{

        const res = await fetch(`https://cors-anywhere.herokuapp.com/${baseURLimage}${imagekey}q=${whichcity}`);
        //$.getJSON(`${baseURLimage}${imagekey}q=${encodeURIComponent(whichcity)}`, function(data){
         //   if (parseInt(data.totalHits) > 0)
         //       $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
         //   else
         //       console.log('No hits');
         //   });
        try {
        
           const data = await res.json();
            //const imageurl = res;
            console.log(data,'where is my data')
            //console.log(data.main.temp)
            //tempt = data.temperature;
            return imageurl;
        }  catch(error) {
            console.log("error", error);
            // appropriately handle the error
        }
    }

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

        
});

    
    
    
    


