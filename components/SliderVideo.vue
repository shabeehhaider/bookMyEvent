<template>
    <div class="slider-area position-relative">
      <Splide :options="splideOptions">
        <SplideSlide v-for="(slide, index) in slides" :key="index">
          <div class="single-slider slider-height d-flex align-items-center">
            <div class="hero__caption">
            <span>{{ slide.subheading }}</span>
            <h1>{{ slide.heading }}</h1>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const splideOptions = ref({
  type: 'loop',
  perPage: 1,
  autoplay: false,
  pauseOnHover: false,
  interval: 3000,
  arrows: false, // Disable arrows
  pagination: true, // Show dots for slides
});

const slides = ref([
  {
    subheading: "Enjoy Unforgettable Events with Party Yacht's Luxury Fleet",
    heading: "Experience the Ultimate Yacht Party on the Water",
    link: "industries.html",
    videoLink: "https://www.youtube.com/watch?v=up68UAfH0d0",
  },
  {
    subheading: "Enjoy Unforgettable Events with Party Yacht's Luxury Fleet",
    heading: "Experience the Ultimate Yacht Party on the Water",
    link: "industries.html",
    videoLink: "https://www.youtube.com/watch?v=up68UAfH0d0",
  },
]);

</script>

<style lang="scss" scoped>
.slider-height {
  height: 700px;
}

.slider-area {
  margin-top: -1px;
  background-image: url(../assets/img/hero/party.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .hero__caption {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.4); /* Dark overlay behind text */
    border-radius: 10px;

    span {
      font-size: 18px;
      font-family: 'Sarabun', sans-serif; /* Replace with your font */
      font-weight: 600;
      margin-bottom: 35px;
      text-transform: uppercase;
      color: #fff;
      display: inline-block;
      position: relative;
      padding-left: 100px;
      letter-spacing: 0.05em;

      @media (max-width: 767px) {
        font-size: 14px;
      }

      &::before {
        position: absolute;
        content: '';
        width: 70px;
        height: 2px;
        background: #fff;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    h1 {
      font-size: 48px; /* Increased font size for clarity */
      font-weight: 600;
      color: #fff;
      line-height: 1.2;
      margin-bottom: 57px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Text shadow for visibility */

      @media (max-width: 767px) {
        font-size: 24px;
      }
    }

    p {
      font-size: 18px;
      color: #fff;
      font-family: 'Sarabun', sans-serif;
      margin-bottom: 50px;
    }
  }
}

.hero-overly {
    position: relative;
    z-index: 1;

    &::before {
        position: absolute;
        content: '';
        background-color: rgba(1, 10, 28, 0.3);
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-repeat: no-repeat;
    }
}

.header-transparent {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
}

a{
  &.hero-btn {
    padding: 20px;
    background: #fff;
    color: #331391 !important;
    text-decoration: none;
    &:hover{
      background: #e6c35c;
    }
  }
}



.counter-section {
    padding-top: 100px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.4); /* Dark overlay behind text */
    border-radius: 10px;

    @media (max-width: 767px) {
      right: 20px;
    }

    .cd-timer {
        .cd-item {
            margin-right: 16px;
            padding-right: 15px;
            height: 60px;
            width: 70px;
            position: relative;
            display: inline-block;
            text-align: center;

            &:after {
                position: absolute;
                right: -10px;
                top: 6px;
                width: 10px;
                height: 10px;
                content: '';
                border-radius: 50%;
                background: #ffdb6f;
            }

            &::before {
                position: absolute;
                right: -10px;
                bottom: 25px;
                width: 10px;
                height: 10px;
                content: '';
                border-radius: 50%;
                background: #ffdb6f;
            }

            &:last-child {
                &::before {
                    position: unset;
                }

                &:after {
                    position: unset;
                }
            }

            span {
                font-size: 60px;
                color: #ffdb6f;
                font-weight: 400;
                line-height: 30px;
                margin-bottom: 28px;
                display: inline-block;
            }

            p {
                font-size: 16px;
                color: #ffdb6f;
                margin-bottom: 0;
                line-height: 30px;
                text-transform: uppercase;
            }
        }
    }

    .counter-text {
        span {
            font-size: 16px;
            color: #ffffff;
        }

        h3 {
            color: #ffffff;
            font-weight: 700;
            line-height: 38px;
            margin-top: 10px;
        }
    }
}

</style>