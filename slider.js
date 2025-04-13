//--- Slider 1 (left button) ---//
const menuBtn = document.querySelector('.left');
const slider = document.querySelector('.slider1');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  slider.classList.toggle('active');
  slider2.classList.remove('active'); // slider2 band ho jaye
});


//--- Slider 2 (right button) ---//
const menuBtn2 = document.querySelector('.right');
const slider2 = document.querySelector('.slider2');

menuBtn2.addEventListener('click', function (e) {
  e.stopPropagation();
  slider2.classList.toggle('active');
  slider.classList.remove('active'); // slider1 band ho jaye
});


//--- Jab body pe click ho, dono slider band ho jayein ---//
body.addEventListener('click', function () {
  slider.classList.remove('active');
  slider2.classList.remove('active');
});