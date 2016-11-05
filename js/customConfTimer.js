function countdownConf() {

    var deadline = new Date("March 3 2017 7:59:59");
    var now = new Date();
    var timeDiff = deadline.getTime() - now.getTime();
    if (timeDiff <= 0) {
        clearTimeout(timer);
    }

    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("daysTime").innerHTML = days;
    document.getElementById("hoursTime").innerHTML = hours;
    document.getElementById("minTime").innerHTML = minutes;
    document.getElementById("secsTime").innerHTML = seconds;

    var timer = setTimeout('countdownConf()',1000);
    
}