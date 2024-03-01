import Swiper from 'swiper';
import { FreeMode, Navigation, Pagination, Thumbs, Autoplay } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')

        if (slider.closest('.catalog-content__slider')) {
            const thumbs = new Swiper('.swiper[thumbsSlider]', {
                modules: [
                    FreeMode
                ],
                freeMode: true,
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                spaceBetween: 10,
            });

            new Swiper('.catalog-content__slider-main .swiper', {
                modules: [
                    Navigation, Thumbs
                ],
                spaceBetween: 20,
                slidesPerView: 1,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                thumbs: {
                    swiper: thumbs,
                },
            });
        }

    })
}