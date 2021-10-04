//stores the images.
let images = ['images/isac.jpeg', 'images/isac3.PNG']

let changeImageBtn = document.getElementById('change-image')
var onSlideshow = Boolean(true);
//on Click stops/starts the slideshow  
changeImageBtn.addEventListener('click', stopSlideshow)



var currentIndex = 0;

function slideShow() {
  if (onSlideshow == true) {
    document.getElementById('imgTop').setAttribute('src', images[currentIndex])
    currentIndex++;
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
  }
}

window.addEventListener('load', startSlideShow);

function stopSlideshow() {
  var btnSlideShow = document.getElementById("change-image");
  var play = 'Play Slideshow';
  var stop = 'Stop Slideshow';
  if (onSlideshow == true) {
    onSlideshow = false;
    btnSlideShow.innerHTML = play;
  }
  else {
    onSlideshow = true;
    btnSlideShow.innerHTML = stop;
  }
}

function startSlideShow() {
  setInterval(slideShow, 5000);
}
