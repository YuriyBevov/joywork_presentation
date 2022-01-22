import Swiper, { Autoplay, Thumbs, Zoom} from 'swiper';
Swiper.use([Autoplay, Thumbs, Zoom]);

const slider = document.querySelector('.swiper-container');

if(slider) {
    let swiper = new Swiper(".apartment-slider-thumbs", {
      slidesPerView: "auto",
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
      //direction: "vertical",

      breakpoints: {
        768: {
          //direction: "vertical",
          //spaceBetween: 0,
        },

        534: {
          //spaceBetween: 10,
          //direction: "vertical",
        },
      }
      
    });

    let swiperThumbs = new Swiper(".apartment-slider", {
      zoom: true,
      loop: true,
      spaceBetween: 10,

      thumbs: {
        swiper: swiper,
      },
    });
}
