import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordions} from './vendor/init-accordion';
import {initTabs} from './vendor/init-tabs';


// аккордеон

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initAccordions();
  });
});

// табы

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
  });
});

// валидация формы

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// видео

let video = document.querySelector('.gym__video');
let videoBtn = document.querySelector('.gym__video-btn');
let mobilePoster = 'img/video-preview-mobile.jpg';
let defaultPoster = 'img/video-preview.jpg';
let breakpoint = window.matchMedia('(max-width:767px)');

function breakpointChecker() {
  if (breakpoint.matches) {
    video.setAttribute('poster', mobilePoster);
  } else {
    video.setAttribute('poster', defaultPoster);
  }
}

function videoBtnOnclick() {
  if (video.paused) {
    video.play();
    videoBtn.style.display = 'none';
  } else {
    video.pause();
  }
}

function videoOnclick() {
  video.pause();
  videoBtn.style.display = 'block';
}

video.addEventListener('click', videoOnclick);
videoBtn.addEventListener('click', videoBtnOnclick);
window.addEventListener('resize', breakpointChecker);
