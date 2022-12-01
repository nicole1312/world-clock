function updateTime(){

 let londonElement=document.querySelector("#london");
  if (londonElement){
     let londonDateElement=londonElement.querySelector(".date");
     let londonTimeElement=londonElement.querySelector(".time");
     let londonTime= moment().tz("Europe/London");

     londonDateElement.innerHTML=londonTime.format("dddd, MMMM Do YYYY");
     londonTimeElement.innerHTML=londonTime.format("h:mm:ss [<small>]A[</small>]");
    }

 let stockholmElement=document.querySelector("#stockholm");
  if (stockholmElement){
     let stockholmDateElement=stockholmElement.querySelector(".date");
     let stockholmTimeElement=stockholmElement.querySelector(".time");
     let stockholmTime= moment().tz("Europe/Stockholm");
    
     stockholmDateElement.innerHTML=stockholmTime.format("dddd, MMMM Do YYYY");
     stockholmTimeElement.innerHTML=stockholmTime.format("h:mm:ss [<small>]A[</small>]");
    } 
 let sydneyElement=document.querySelector("#sydney");
  if (sydneyElement){
     let sydneyDateElement=sydneyElement.querySelector(".date");
     let sydneyTimeElement=sydneyElement.querySelector(".time");
     let sydneyTime= moment().tz("Australia/Sydney");

     sydneyDateElement.innerHTML=sydneyTime.format("dddd, MMMM Do YYYY");
     sydneyTimeElement.innerHTML=sydneyTime.format("h:mm:ss [<small>]A[</small>]");
    } 
    
}
function updateCity(event){
   let cityTimeZone = event.target.value;
     if(cityTimeZone==="current-location"){
        cityTimeZone=moment.tz.guess();
     }
      
   let cityName=cityTimeZone.replace("_", " ").split("/")[1];
   let cityTime= moment().tz(cityTimeZone);
   let citiesElement=document.querySelector("#cities");
   citiesElement.innerHTML= `
   <div class="city">
     <div>
       <h2> ${cityName} </h2>
       <div class="date"> 
         ${cityTime.format("dddd, MMMM Do YYYY")}
       </div>
     </div> 
     <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")} </small> </div>
   </div>
   `; 
   document.querySelector("#start-page").classList.add("d-block");
 }


 let citiesSelectElement=document.querySelector("#city");
 citiesSelectElement.addEventListener("change", updateCity);
 
 updateTime();
 setInterval(updateTime, 1);
 

 
 

 