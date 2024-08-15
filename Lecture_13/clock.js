setInterval(() => {
    const date = new Date();

    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm;

    if (hours <= 12) {
        am_pm = "AM";
    } else {
        am_pm = "PM";
    }

    if (hours > 12) {
        hours = hours - 12;
    } else if (hours == 0) {
        hours = 12;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(`${hours} : ${minutes} : ${seconds} ${am_pm}`);
    
    document.getElementById("hrs").innerHTML = hours + ":" + minutes + ":" + seconds + " " + am_pm; 
    document.getElementById("d").innerHTML = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    document.getElementById("day").innerHTML = days[date.getDay()];
    
}, 1000);
