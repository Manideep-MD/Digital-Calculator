let time = document.getElementById("time")
let timeformat = document.getElementById("time2")

document.addEventListener("DOMContentLoaded", function(){
    setInterval( showtime , 1000)
})

let showtime = () =>{
     let date = new Date()

     let hr = date.getHours()
     let min = date.getMinutes()
     let sec = date.getSeconds()
     
     if(hr > 12){
        hr = hr - 12
     }
    
     hr = hr<10 ? `0${hr}`:hr ;
     min = min<10 ? `0${min}`: min;
     sec = sec<10 ? `0${sec}`: sec ;
     time.innerHTML = `${hr} : ${min} :${sec}`;
     timeformat.innerHTML = hr < 12 ? "PM" : "AM";
     
}