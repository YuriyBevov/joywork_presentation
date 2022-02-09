import Swiper, { Autoplay, Thumbs, Zoom} from 'swiper';
Swiper.use([Autoplay, Thumbs, Zoom]);

const slider = document.querySelector('.swiper-container');

if(slider) {
    let swiper = new Swiper(".apartment-slider-thumbs", {
      slidesPerView: "auto",
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
    });

    let swiperThumbs = new Swiper(".apartment-slider", {
      // zoom: true,
      loop: true,
      spaceBetween: 10,

      thumbs: {
        swiper: swiper,
      },
    });

    swiperThumbs.on('click', function (evt) {

        /*let zoomed = document.querySelector('.swiper-slide-zoomed');

        if(zoomed) {
          zoomed.classList.remove('swiper-slide-zoomed');
        }*/
    });
}
