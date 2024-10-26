<template>
  <section class="about-low-area section-padding2">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="about-caption mb-50">
            <div class="section-tittle mb-35">
              <h2>Yacht Party</h2>
            </div>
            <p>
              Get Ready for the Ultimate Yacht Party!
              Join us this Saturday at 11:30 PM for an unforgettable night aboard a luxurious yacht. Dance the night away with electrifying beats from our top-tier DJs, who'll be spinning the best tracks to keep the energy high all night long. Expect an incredible vibe, amazing people, and everything you need for the perfect party on the water.  
            </p>
            <p>
              Prepare for a night full of music, drinks, and excitement under the stars! Don't miss out—this is the yacht party of the season!
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="single-caption mb-20">
                 <div class="caption">
                  <h5>Where</h5>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="single-caption mb-20">
                <div class="caption">
                  <h5>When</h5>
                  <p>Oct 26, 2024</p>
                </div>
              </div>
            </div>
          </div>
          <nuxt-link to="/events" class="btn header-right-btn">Get Your Ticket</nuxt-link>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="about-img-wrapper">
            <div class="about-img">
              <img src="@/assets/img/hero/event-2.png" alt="event Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

</script>
<style lang="scss" scoped>
.section-padding2 {
  padding-top: 100px;
  padding-bottom: 100px;
}

.header-right-btn.btn {
    background-color: #331391;
    color: white;
    padding: 10px 25px;
    font-size: 14px;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #250e68; /* Darker purple on hover */
    }
  }

.about-low-area {
  position: relative;

  .about-caption {
    p {
      font-size: 16px;
      color: #64676c;
      line-height: 1.6;
      margin-bottom: 25px;
    }
  }

  .single-caption {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .caption-icon span {
      color: #212025;
      font-size: 35px;
      margin-right: 10px;
      display: block;
    }

    .caption {
      h5 {
        color: #26264b;
        font-size: 18px;
        font-weight: 500;
      }

      p {
        color: #7f8192;
        font-size: 14px;
        margin-bottom: 0px;
        line-height: 1.7;
      }
    }
  }

  .about-img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 767px) {
      margin-top: 30px;
    }
  }

  .about-img {
    width: 100%;
    max-width: 450px; /* Control the image width */
    img {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }
}

</style>