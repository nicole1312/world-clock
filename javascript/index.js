function updateTime(){
 let londonElement=document.querySelector("#london");
  if (londonElement){
     let londonDateElement=londonElement.querySelector(".date");
     let londonTimeElement=londonElement.querySelector(".time");
     let londonTime= moment().tz("Europe/London");

     londonDateElement.innerHTML=londonTime.format("dddd, MMMM Do YYYY");
     londonTimeElement.innerHTML=londonTime.format("h:mm:ss [<small>]A[</small>]");
    }
 let lisbonElement=document.querySelector("#lisbon");
  if (lisbonElement){
     let lisbonDateElement=lisbonElement.querySelector(".date");
     let lisbonTimeElement=lisbonElement.querySelector(".time");
     let lisbonTime= moment().tz("Europe/Lisbon");

     lisbonDateElement.innerHTML=lisbonTime.format("dddd, MMMM Do YYYY");
     lisbonTimeElement.innerHTML=lisbonTime.format("h:mm:ss [<small>]A[</small>]");
    }

 let stockholmElement=document.querySelector("#stockholm");
   if (stockholmElement){
      let stockholmDateElement=stockholmElement.querySelector(".date");
      let stockholmTimeElement=stockholmElement.querySelector(".time");
      let stockholmTime= moment().tz("Europe/Stockholm");

      stockholmDateElement.innerHTML=stockholmTime.format("dddd, MMMM Do YYYY");
      stockholmTimeElement.innerHTML=stockholmTime.format("h:mm:ss [<small>]A[</small>]");
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
       <div class="date"> ${cityTime.format("dddd, MMMM Do YYYY")}</div>
     </div> 
     <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")} </small> </div>
   </div>
   `;
 }

 let citiesSelectElement=document.querySelector("#city");
 citiesSelectElement.addEventListener("change", updateCity);

 updateTime();
 setInterval(updateTime, 1000);