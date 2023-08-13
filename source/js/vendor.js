// Swiper 7.4.1
import Swiper, {Navigation, Pagination} from './vendor/swiper';
import './vendor/focus-visible-polyfill';

Swiper.use([Navigation, Pagination]);

const sliderTrainers = new Swiper('.trainers__slider', {
  loop: true,
  navigation: {
    nextEl: '.trainers__btn-next',
    prevEl: '.trainers__btn-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
    },
  },
});

const sliderReviews = new Swiper('.reviews__slider', {
  loop: false,
  navigation: {
    nextEl: '.reviews__btn-next',
    prevEl: '.reviews__btn-prev',
  },
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
});

export {sliderTrainers, sliderReviews};
