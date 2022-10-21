function updateTime(){
let londonElement=document.querySelector("#london");
let londonDateElement=londonElement.querySelector(".date");
let londonTimeElement=londonElement.querySelector(".time");
let londonTime=moment().tz("Europe/London");

londonDateElement.innerHTML=londonTime.format("dddd, MMMM Do YYYY");
londonTimeElement.innerHTML=londonTime.format("H:mm:ss [<small>]A[</small>]");

let lisbonElement=document.querySelector("#lisbon");
let lisbonDateElement=lisbonElement.querySelector(".date");
let lisbonTimeElement=lisbonElement.querySelector(".time");
let lisbonTime=moment().tz("Europe/Lisbon");

lisbonDateElement.innerHTML=lisbonTime.format("dddd, MMMM Do YYYY");
lisbonTimeElement.innerHTML=lisbonTime.format("H:mm:ss [<small>]A[</small>]");


let stockholmElement=document.querySelector("#stockholm");
let stockholmDateElement=stockholmElement.querySelector(".date");
let stockholmTimeElement=stockholmElement.querySelector(".time");
let stockholmTime=moment().tz("Europe/Stockholm");

stockholmDateElement.innerHTML=stockholmTime.format("dddd, MMMM Do YYYY");
stockholmTimeElement.innerHTML=stockholmTime.format("H:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
