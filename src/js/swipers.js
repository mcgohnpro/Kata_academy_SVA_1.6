import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

window.addEventListener('DOMContentLoaded', () => {
  let swiper;
  let swiperSecond;
  let swiperThird;
  const swiperBrends = document.querySelector('.slider__swiper--first');
  const swiperDevices = document.querySelector('.slider__swiper--second');
  const swiperPrices = document.querySelector('.price__table--slider');

  const showMoreButtonBrends = document.querySelector(
    '.brends__view-all-button'
  );
  const showMoreButtonDevices = document.querySelector(
    '.devices__view-all-button'
  );
  const breakPointSwiper = window.matchMedia('(max-width: 767px)');

  const swiperParameters = {
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination'
    },
    modules: [Navigation, Pagination]
  };
  const pricesSliderParameters = {
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.price__pagination'
    },
    modules: [Navigation, Pagination]
  };

  function initSwiper() {
    if (breakPointSwiper.matches) {
      swiper = new Swiper('.slider__swiper--first', swiperParameters);
      swiperSecond = new Swiper('.slider__swiper--second', swiperParameters);
      swiperThird = new Swiper('.price__table--slider', pricesSliderParameters);
    } else {
      if (swiper !== undefined) {
        swiper.destroy(true, true);
        swiperSecond.destroy(true, true);
        swiperThird.destroy(true, true);
      }
      return;
    }
  }

  breakPointSwiper.addEventListener('change', initSwiper);
  initSwiper();

  function contentExpander(button, element) {
    if (!element.classList.contains('slider__swiper--expanded')) {
      element.classList.add('slider__swiper--expanded');
      button.children[1].textContent = 'Скрыть';
      button.children[0].classList.add('view-all-button__decore--opened');
    } else {
      element.classList.remove('slider__swiper--expanded');
      button.children[1].textContent = 'Показать все';
      button.children[0].classList.remove('view-all-button__decore--opened');
    }
  }

  showMoreButtonBrends.addEventListener('click', () => {
    contentExpander(showMoreButtonBrends, swiperBrends);
  });

  showMoreButtonDevices.addEventListener('click', () => {
    contentExpander(showMoreButtonDevices, swiperDevices);
  });
});
