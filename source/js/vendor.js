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
  speed: 300,
});

const sliderTours = new Swiper('.tours__slider', {
  loop: true,
  navigation: {
    prevEl: '.tours__btn-prev',
    nextEl: '.tours__btn-next',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
});

const sliderInstructors = new Swiper('.instructors', {
  loop: true,
  navigation: {
    prevEl: '.instructors__btn-prev',
    nextEl: '.instructors__btn-next',
  },
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
});

const sliderReviews = new Swiper('.reviews__slider', {
  loop: false,
  navigation: {
    prevEl: '.reviews__btn-prev',
    nextEl: '.reviews__btn-next',
  },
  slidesPerView: 1.48,
  spaceBetween: 30,
  slidesPerGroup: 1,
});

const sliderAdvantages = new Swiper('.advantages__slider', {
  loop: true,
  navigation: {
    prevEl: '.advantages__btn-prev',
    nextEl: '.advantages__btn-next',
  },
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
});

export {sliderHero, sliderTours, sliderInstructors, sliderReviews, sliderAdvantages};
