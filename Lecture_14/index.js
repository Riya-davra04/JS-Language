let counters = {
    insta: 0,
    snap: 0,
    fb: 0,
    twitter: 0
};

 incrementCounter = (platform) => {
    counters[platform]++;
    document.getElementById(platform + '-counter').innerText = counters[platform];
}

startCounter = (platform, delay) => {
    setTimeout(function() {
        setInterval(function() {
            incrementCounter(platform);
        }, 100); 
    }, delay);
}

startCounter('insta', 0);        
startCounter('snap', 1000);     
startCounter('fb', 2000);        
startCounter('twitter', 3000);  