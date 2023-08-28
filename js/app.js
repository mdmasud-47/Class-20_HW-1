
function updateTime() {
    let now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
   
    let currentTime = `${hours}:${minutes}:${seconds}`;
  
    
    $('#time').text(currentTime)
  }
  

  updateTime();
  
  setInterval(updateTime, 1000);

  
  

  