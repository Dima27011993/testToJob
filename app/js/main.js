$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:4,
        margin:20,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        autoplaySpeed:1000,
        video:true,
        slideBy:4,
        dots:true,
        nav:true,
        loop:true,
        slideBy:1
    });
  });

let time = 3600;
  const countDownEI = document.getElementById('countdown');
  setInterval(updateCountdown, 1000);

  function updateCountdown(){
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      seconds = seconds < 10 ? "0" + seconds: seconds;
      countDownEI.innerHTML = `${minutes + ' минут'} ${seconds + ' секунд'}`;
      time--;
  }