<template>
    <div class="slider-area position-relative">
      <Splide :options="splideOptions">
        <SplideSlide v-for="(slide, index) in slides" :key="index">
          <div class="single-slider slider-height d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-9 col-sm-10">
                  <div class="hero__caption">
                    <span>{{ slide.subheading }}</span>
                    <h1>{{ slide.heading }}</h1>
                    <div class="slider-btns">
                      <a :href="slide.link" class="hero-btn">Download</a>
                      <a :href="slide.videoLink" class="popup-video video-btn">
                        <i class="fas fa-play"></i>
                      </a>
                      <p class="d-none">Story Video<br />Watch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <div class="counter-section d-none d-sm-block">
        <div class="cd-timer" id="countdown">
          <div class="cd-item">
              <span>96</span>
              <p>Days</p>
          </div>
          <div class="cd-item">
              <span>15</span>
              <p>Hrs</p>
          </div>
          <div class="cd-item">
              <span>07</span>
              <p>Min</p>
          </div>
          <div class="cd-item">
              <span>02</span>
              <p>Sec</p>
          </div>
        </div>
      </div>
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
});

const slides = ref([
  {
    subheading: "Committed to success",
    heading: "Digital Conference For Designers",
    link: "industries.html",
    videoLink: "https://www.youtube.com/watch?v=up68UAfH0d0",
  },
  {
    subheading: "Committed to success",
    heading: "Digital Conference For Designers",
    link: "industries.html",
    videoLink: "https://www.youtube.com/watch?v=up68UAfH0d0",
  },
]);


</script>

<style lang="scss">
.slider-height {
    height: 900px;
    @media (max-width: 1200px) {
        height: 700px;
    }
    @media (max-width: 992px) {
        height: 650px;
    }
    @media (max-width: 768px) {
        height: 600px;
    }
    @media (max-width: 576px) {
        height: 500px;
    }
}

.slider-height2 {
    height: 450px;
    background-size: cover;
    @media (max-width: 992px) {
        height: 350px;
    }
    @media (max-width: 768px) {
        height: 260px;
    }
    @media (max-width: 576px) {
        height: 260px;
    }
}



.slider-area {
    margin-top: -1px;
    background-image: url(../assets/img/hero/h1_hero.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    .hero__caption {
        overflow: hidden;
        @media (max-width: 768px) {
            padding-bottom: 100px;
        }

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

            @media (max-width: 576px) {
                font-size: 13px;
                padding-left: 66px;
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
                @media (max-width: 576px) {
                    width: 48px;
                }
            }
        }

        h1 {
            font-size: 75px;
            font-weight: 800;
            margin-bottom: 14px;
            color: #fff;
            line-height: 1.2;
            margin-bottom: 57px;

            @media (max-width: 1200px) {
                font-size: 70px;
            }

            @media (max-width: 992px) {
                font-size: 50px;
            }

            @media (max-width: 768px) {
                font-size: 35px;
            }

            @media (max-width: 576px) {
                font-size: 29px;
            }
        }

        p {
            font-size: 18px;
            color: #fff;
            font-family: 'Sarabun', sans-serif; /* Replace with your font */
            margin-bottom: 50px;
        }

        .slider-btns {
            display: flex;

            a.video-btn {
                background: none;
                width: 60px;
                height: 60px;
                display: inline-block;
                text-align: center;
                line-height: 60px;
                border-radius: 50%;
                position: relative;
                margin-left: 29px;
                border: 1px solid #ffdb6f;

                i {
                    color: #ffdb6f;
                }
            }

            .video-cap {
                display: inline-block;
                line-height: 1.5;
                margin: 0;
                margin-left: 15px;
            }
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
    right: 150px;
    bottom: 100px;

    @media (max-width: 1200px) {
        right: 80px;
        bottom: 80px;
    }

    @media (max-width: 992px) {
        right: 30px;
        bottom: 30px;
    }

    @media (max-width: 768px) {
        right: 30px;
        bottom: 30px;
    }

    @media (max-width: 576px) {
        right: 30px;
        bottom: 30px;
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