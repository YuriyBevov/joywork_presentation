import Swiper, { Autoplay, Thumbs, Zoom, Navigation} from 'swiper';
Swiper.use([Autoplay, Thumbs, Zoom, Navigation]);

const apartmentSliders = document.querySelectorAll('.apartment-slider');

if(apartmentSliders) {
  apartmentSliders.forEach(slider => {
    let isThumbsExist = slider.parentNode.querySelector('.apartment-slider-thumbs');
    let thumbs = null;

    if(isThumbsExist) {
      thumbs = new Swiper(".apartment-slider-thumbs", {
        slidesPerView: "auto",
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        spaceBetween: 10, 
      });
    }

    new Swiper(".apartment-slider", {
      spaceBetween: 10,

      navigation: {
        nextEl: '.apartment-slider-button-next',
        prevEl: '.apartment-slider-button-prev',
      },

      thumbs: {
        swiper: thumbs ? thumbs : null,
      },
    });
  });
}