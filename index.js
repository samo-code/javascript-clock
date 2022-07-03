let secs = 0;
let mins = 0;
let hrs = 0;

let d = new Date();

setInterval(
    function(){
        d= new Date();
        secs = d.getSeconds() * 6;
        mins = d.getMinutes() * 6;
        hrs = d.getHours() * 30 + Math.round(mins/12);
        document.getElementById("secs-hand").style.transform = "rotate("+ secs + "deg)";
        document.getElementById("mins-hand").style.transform = "rotate(" + mins + "deg)";
        document.getElementById("hrs-hand").style.transform = "rotate(" + hrs + "deg)"
    },1000
);