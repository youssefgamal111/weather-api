



// Create a new date instance dynamically with JS
let data= {};
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
const APIkey='500089ed93bf82d0f7074a57b19ec3ac';
//getting api from another website
 GetAPI=async(url)=>{
     const res=await fetch(url);
     try{
         data = await res.json();
         console.log(data);
        return data;
     }
     catch(error){
        console.log("error", error);
     }

 }
 const postData=async(url='',data={})=>{
   const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }

}
//write the temp ,date,useridea on the browser interface
updateUI=async()=>
{ 
  const res= await fetch('/update');
try{
  const allData=await res.json();
  console.log(allData);
  document.getElementById('temp').innerHTML=allData.temperature;
  document.getElementById('date').innerHTML=allData.date;
  document.getElementById('content').innerHTML=allData.userResponse;

}
catch(error){
  console.log("error", error);
}
}
const butt=document.getElementById('generate').addEventListener('click',buttonSumbit);
//after enter zip code of the city and the user response and click on the button 
function buttonSumbit()
{
  const zipcode= document.getElementById('zip').value;
 const UserResponse= document.getElementById('feelings').value;
  if(zipcode==''||UserResponse== '') alert('enter zipcode or feelings! ');
  else{
 const url =`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${APIkey}&units=metric`
  GetAPI(url)
.then(function(data){
   
    postData('/sendData',{temperature:data.main.temp,date:newDate,userResponse:UserResponse});
})
.then(function(data){
  updateUI();

})
  }
}
