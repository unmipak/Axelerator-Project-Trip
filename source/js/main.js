import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// открытие и закрытие меню

let navMenu = document.querySelector('.header__nav');
let header = document.querySelector('.header');
let navBtn = document.querySelector('.header__nav-btn');

navMenu.classList.remove('header__nav--nojs');
navMenu.classList.add('header__nav--closed');

navBtn.addEventListener('click', function () {
  if (navMenu.classList.contains('header__nav--closed')) {
    navMenu.classList.remove('header__nav--closed');
    navMenu.classList.add('header__nav--opened');
    header.classList.add('header--white');
  } else {
    navMenu.classList.add('header__nav--closed');
    navMenu.classList.remove('header__nav--opened');
    header.classList.remove('header--white');
  }
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

let video = document.querySelector('video');
let videoBtn = document.querySelector('.hero__video-btn');
let mobilePoster = 'img/video-tablet.jpg';
let defaultPoster = 'img/video-desktop.jpg';
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
