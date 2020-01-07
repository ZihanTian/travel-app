function handleSubmit(event) {
  
    event.preventDefault()
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
    //document.getElementById('isurl').innerHTML = Client.checkForName(formText.url);
    
    //console.log("::: Form Submitted :::")
    //fetch('http://localhost:8081/test')
    //if (Client.checkForName(formText.url==='What you input is not a valid url, please try again.')){
    //  document.getElementById('result').innerHTML  = '';
    //   document.getElementById('results1').innerHTML = '';
    //   document.getElementById('results2').innerHTML = '';
    //}
    postData('http://localhost:8081/test',formText)
    //.then(function(res) {
      //console.log(res)
    //  if (res.message1){
    //    document.getElementById('result').innerHTML  = `Analyze successfully!`
    //   document.getElementById('results1').innerHTML = `The polarity of this article is ${res.message1} with confidence of ${res.message2}.`
    //   document.getElementById('results2').innerHTML = `This article is ${res.message3} with confidence of ${res.message4}.`
    //  }else{
    //    document.getElementById('result').innerHTML = `Fail to analyze it. Sorry.`

    //  }
    //})
    
}

export { handleSubmit }



