// Swiper 7.4.1
import Swiper, { Navigation, Pagination } from './vendor/swiper';
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
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const sliderInstructors = new Swiper('.instructors', {
  loop: false,
  navigation: {
    prevEl: '.instructors__btn-prev',
    nextEl: '.instructors__btn-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const sliderReviews = new Swiper('.reviews__slider', {
  loop: false,
  navigation: {
    prevEl: '.reviews__btn-prev',
    nextEl: '.reviews__btn-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.3,
      centerInsufficientSlides: true,
      freeMode: true,
    },
    1200: {
      slidesPerView: 1.5,
      centerInsufficientSlides: true,
      freeMode: true,
    },
  },
});

const sliderAdvantages = new Swiper('.advantages__slider', {
  breakpoints: {
    1200: {
      loop: true,
      navigation: {
        prevEl: '.advantages__btn-prev',
        nextEl: '.advantages__btn-next',
      },
      slidesPerView: 4.5,
      spaceBetween: 30,
      slidesPerGroup: 1,
      freeMode: true,
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1200) {
    sliderAdvantages.destroy(true, true);
    const advantagesSliderContainer = document.querySelector('.advantages__slider');
    const advantagesSliderWrapper = advantagesSliderContainer.querySelector('.swiper-wrapper');
    advantagesSliderWrapper.classList.remove('swiper-wrapper');
  }
});

const sliderGallery = new Swiper('.gallery__slider', {
  loop: false,
  freeMode: true,
  navigation: {
    prevEl: '.gallery__btn-prev',
    nextEl: '.gallery__btn-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    1200: {
      slidesPerView: 2.9,
      spaceBetween: 5,
    },
  },
});

export { sliderHero, sliderTours, sliderInstructors, sliderReviews, sliderAdvantages, sliderGallery };
