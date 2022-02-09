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
      loop: true,
      spaceBetween: 10,

      thumbs: {
        swiper: swiper,
      },
    });
}
