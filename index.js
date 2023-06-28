const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
});

// slick slider
$(document).ready(function() {
    $(".image-slider").slick({
        slideToSlow: 1,
        slideToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 900,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        fade: true
    });
});

// time countdown 
setInterval(function time(){
    var d = new Date();  //Date() là hàm đếm ngược 1 ngày 
    var hours = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    if((min + '').length == 1){
      min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
          sec = '0' + sec;
    }
    jQuery('.time-cd').html(hours+':'+min+':'+sec)
  }, 1000);

const myCards = document.querySelectorAll('.innerCard');
myCards.forEach((myCard) => {
    myCard.addEventListener('click', (e) => {
        myCard.classList.toggle('flipCard');
    });
});

// hàm  để tạo ra 4 sản phảm ngẫu nhiên khi hàm time countdown chạy xong 1 lần) 

(
    (count = 5) => {
        const randomRange = (min = 0, max = 100) => {
            let difference = max - min;
            let rand = Math.random();
            rand = Math.floor( rand * difference);
            rand = rand + min;
            return rand;
        }
        let arr = [];
        while(count--) {
            let seed = randomRange(0, 100);
            if(!arr.includes(seed)) {
                arr.push(seed);
            } else {
                while(arr.includes(seed)) {
                    seed = randomRange(0, 100);
                }
                arr.push(seed);
            }
        }
        console.log(arr);
    }
)();

