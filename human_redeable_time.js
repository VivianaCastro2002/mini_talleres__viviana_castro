https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript

function humanReadable (seconds) {
    const hours = Math.floor(seconds/3600);
    const minutes = Math.floor((seconds%3600)/60);
    const secs = seconds%60;
    
    const formatTime = (unit) =>String(unit).padStart('2',0);
    
    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(secs)}`;
  }