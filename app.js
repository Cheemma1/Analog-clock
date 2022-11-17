


const sec = document.querySelector(".secs");
      const min = document.querySelector(".mins");
      const hr = document.querySelector(".hour");
      setInterval(function(){
        let time  = new Date();
        let secs = time.getSeconds() * 6;
        let mins = time.getMinutes() * 6;
        let hrs = time.getHours() * 30;
        sec.style.transform = `rotate(${secs}deg)`;
        min.style.transform = `rotate(${mins}deg)`;
        hr.style.transform = `rotate(${hrs+(mins/12)}deg)`;
      });