<template>
  <section class="about-low-area section-padding2">
    <div class="container-fluid p-0">
      <div class="about-img-banner">
        <img src="@/assets/img/hero/party.png" alt="event Image" />
      </div>
    </div>
    <div class="container">
      <div class="event-details">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="target-date text-center">
            </div>
            <div class="countdown">
              <div class="counter-section">
                <h3>Event Date: {{ formattedDate }}</h3>
                <div class="cd-timer">
                  <div class="cd-item">
                    <span>{{ countdown.days }}</span>
                    <p>Days</p>
                  </div>
                  <div class="cd-item">
                    <span>{{ countdown.hours }}</span>
                    <p>Hrs</p>
                  </div>
                  <div class="cd-item">
                    <span>{{ countdown.minutes }}</span>
                    <p>Min</p>
                  </div>
                  <div class="cd-item">
                    <span>{{ countdown.seconds }}</span>
                    <p>Sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <!-- Left side with gallery -->
              <div class="col-lg-6 col-md-12 gallery-section">
                <div class="main-image ">
                  <img src="@/assets/img/gallery/about1.png" alt="Main Gallery Image" class="img-fluid" />
                </div>
                <div class="small-images d-flex">
                  <div class="small-img">
                    <img src="@/assets/img/gallery/about1.png" alt="Gallery Image 1"  />
                  </div>
                  <div class="small-img">
                    <img src="@/assets/img/gallery/about1.png" alt="Gallery Image 1" />
                  </div>
                  <div class="small-img">
                    <img src="@/assets/img/gallery/about1.png" alt="Gallery Image 1" />
                  </div>
                </div>
              </div>

              <!-- Right side with text and button -->
              <div class="col-lg-6 col-md-12 text-section">
                <div class="section-title mb-3 text-center">
                  <h2>Yacht Party</h2>
                </div>
                <p>
                  Get Ready for the Ultimate Yacht Party! Join us for an unforgettable night aboard a luxurious yacht. Dance the night away with electrifying beats from our top-tier DJs, who'll be spinning the best tracks to keep the energy high all night long.
                </p>
                <p>
                  Prepare for a night full of music, drinks, and excitement under the stars! Don't miss out—this is the yacht party of the season!
                </p>
                <div class="text-center">
                  <nuxt-link to="/login" class="btn book-btn">Book Now</nuxt-link> 
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import moment from 'moment';

const targetDate = new Date('2024-12-31T23:59:59');

const countdown = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00'
});

const formattedDate = ref(moment(targetDate).format('MMM,DD YYYY'));

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    function formatTimeUnit(value) {
      return value < 10 ? '0' + value : value.toString();
    }

    countdown.value = {
      days: formatTimeUnit(Math.floor(timeLeft / (1000 * 60 * 60 * 24))),
      hours: formatTimeUnit(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
      minutes: formatTimeUnit(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: formatTimeUnit(Math.floor((timeLeft % (1000 * 60)) / 1000))
    };
  } else {
    countdown.value = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
  }
};

onMounted(() => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
</script>

<style lang="scss" scoped>
.about-low-area {
  position: relative;

  .about-img-banner {
    img {
      width: 100%;
      height: auto;
      max-height: 550px;
      object-fit: cover;
    }
  }

  .event-details {
    margin-top: 60px;
    padding-bottom: 50px;

    .target-date {
      margin-bottom: 20px;

      h3 {
        font-size: 24px;
        color: #333;
      }
    }

    .countdown {
      display: flex;
      justify-content: center;
      align-items: center;

      .counter-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin: 20px;
      }

      .cd-timer {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 10px;

        .cd-item {
          margin-right: 8px;
          padding: 5px;
          height: 50px;
          width: 60px;
          position: relative;
          text-align: center;

          &:after {
            position: absolute;
            right: -5px;
            top: 8px;
            width: 6px;
            height: 6px;
            content: '';
            border-radius: 50%;
            background: #333;
          }

          &::before {
            position: absolute;
            right: -5px;
            bottom: 25px;
            width: 6px;
            height: 6px;
            content: '';
            border-radius: 50%;
            background: #333;
          }

          &:last-child {
            &::before,
            &:after {
              content: none;
            }
          }

          span {
            font-size: 30px;
            color: #333;
            font-weight: 400;
            line-height: 20px;
            margin-bottom: 10px;
            display: inline-block;
          }

          p {
            font-size: 12px;
            color: #333;
            margin-bottom: 0;
            line-height: 20px;
            text-transform: uppercase;
          }
        }
      }
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;

      .gallery-section {
        flex: 1;
        padding-right: 15px;

        .main-image {
          margin-bottom: 20px;
          height: 300px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            object-fit: cover;
          }
        }

        .small-images {
          display: flex;
          justify-content: space-between;

          .small-img {
            width: 175px;
            height: 175px;
            img{
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 8px;

            }
          }
        }
      }

      .text-section {
        flex: 1;
        padding-left: 15px;
        text-align: center;

        .section-title h2 {
          font-size: 32px;
          color: #333;
        }

        p {
          font-size: 16px;
          color: #64676c;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .icon-section {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;

          .icon {
            width: 24px;
            height: 24px;
            background: #64676c;
            border-radius: 50%;
            margin: 0 10px;
          }
        }

        .book-btn {
          background-color: #331391;
          color: white;
          padding: 12px 30px;
          font-size: 16px;
          border-radius: 5px;
          text-transform: uppercase;
          transition: background-color 0.3s ease;
          margin-top: 30px;

          &:hover {
            background-color: #250e68;
          }
        }
      }
    }
  }
}
</style>

