// Swiper 7.4.1
import Swiper, {Navigation, Pagination} from './vendor/swiper';
import './vendor/focus-visible-polyfill';

Swiper.use([Navigation, Pagination]);

const sliderHero = new Swiper('.hero', {
  loop: true,
  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
});

const sliderTours = new Swiper('.tours', {
  loop: true,
  navigation: {
    prevEl: '.tours__btn-prev',
    nextEl: '.tours__btn-next',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
});

export {sliderHero, sliderTours};
