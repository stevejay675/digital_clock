const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = "AM";

    if (h > 12) {
        h = h - 12;
        ap = "PM";
    }

    

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ap;

    if(h<10){
        hourEl.innerText = "0" + h;
    }
    if(m<10){
        minuteEl.innerText = "0" + m;
    }
    if(s<10){
        secondEl.innerText = "0" + s;
    }
}

setInterval(updateClock, 1000)

updateClock();

// You can use the following line instead of window.onload
// window.onload = updateClock;
