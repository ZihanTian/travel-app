//import updateUI from './updateUI';
const submitbutton = document.getElementById('submit');
const secondbutton = document.getElementById('submit1');
secondbutton.addEventListener('click', async function(){
    const req = await fetch('http://localhost:8081/all')
    console.log('get the request')
    try{
        const allData = await req.json()
        console.log(allData,'here i am');
        // update the UI........
        
    }catch(error){
        console.log("error",error)
    }
})
submitbutton.addEventListener('click',async function(){
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
          //console.log(res.body,'should finish the transform')
          try {
            const newData = await res.json();
            console.log(newData,'new try hello');
            return newData
          }catch(error) {
          console.log("error", error);
          // appropriately handle the error
          }
      }
    const updateUI = async () => {
        const req = await fetch('http://localhost:8081/all')
        console.log('get the request')
        try{
            const allData = await req.json()
            console.log(allData,'here i am');
            // update the UI........
            
        }catch(error){
            console.log("error",error)
        }
    }
    // check what text was put into the form field
    const formText ={departtime:new Date(document.getElementById('myDate').value).getTime() /1000,
                     nowtime: Math.round((new Date()).getTime() / 1000),
                     city:document.getElementById('myCity').value}; 
    //const departtime = new Date(formText.date).getTime() / 1000;

    
    //updateUI()
    //const getoutcome =  async () => {

    //}
    postData('http://localhost:8081/test',formText)
    .then(data=>updateUI())
    //.then(data=>data.json())
    //.then(mydata=>console.log(mydata,'here'))
    //const data = await res.json();
    //console.log(data)
        
 
        
});

    
    
    
    


