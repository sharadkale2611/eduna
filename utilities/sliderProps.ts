import type { SwiperOptions } from "swiper/types";

export const sliderProps: {
  category__slider: SwiperOptions;
  testimonial: SwiperOptions;
  testimonial_2: SwiperOptions;
} = {
  /**
   * Category Slider
   * Used by Category2 component
   */
  category__slider: {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: false,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  },

  /**
   * Testimonial Slider
   * Used by Testimonial1 and Testimonial2
   */
  testimonial: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: ".owl-next",
      prevEl: ".owl-prev",
    },
  },

  /**
   * Testimonial Style 2 Slider
   * Used by Testimonial3
   */
  testimonial_2: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  },
};