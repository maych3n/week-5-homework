console.log('Start ticking...')
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;

            if ( 19 > hour > 7) {
                document.getElementById("sun").style.display = "initial"
                document.getElementById("moon").style.display = "none"
                 }
                
                 if ( 19 < hour < 7) {
                    document.getElementById("sun").style.display = "none"
                    document.getElementById("moon").style.display = "initial"
                     }


    
       

}
showTime();
