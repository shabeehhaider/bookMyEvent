<template>
  <section class="about-low-area section-padding2">
    <div class="container">
      <!-- Banner Image at the top -->
      <div class="about-img-banner">
        <img src="@/assets/img/hero/event-2.png" alt="event Image" />
      </div>

      <!-- Event Details Section -->
      <div class="event-details mt-4">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="about-caption">
              <div class="section-tittle mb-3 text-center">
                <h2>Yacht Party</h2>
              </div>
              <p class="text-center">
                Get Ready for the Ultimate Yacht Party! Join us for an unforgettable night aboard a luxurious yacht. Dance the night away with electrifying beats from our top-tier DJs, who'll be spinning the best tracks to keep the energy high all night long. Expect an incredible vibe, amazing people, and everything you need for the perfect party on the water.
              </p>
              <p class="text-center">
                Prepare for a night full of music, drinks, and excitement under the stars! Don't miss out—this is the yacht party of the season!
              </p>
            </div>
          </div>
        </div>

        <!-- Ticketing Section -->
        <div class="row justify-content-center mt-4">
          <div class="col-lg-4 col-md-6 text-center">
            <a href="#" class="btn ticket-btn">Get Tickets</a>
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

.about-low-area {
  position: relative;

  .about-img-banner {
    img {
      width: 100%;
      height: auto;
      max-height: 400px;
      object-fit: cover;
      border-radius: 20px; /* Rounded corners for the banner */
    }
  }

  .event-details {
    margin-top: 30px;

    .section-tittle {
      h2 {
        font-size: 32px;
        color: #333;
      }
    }

    p {
      font-size: 16px;
      color: #64676c;
      line-height: 1.8;
      margin-bottom: 20px;
    }
  }

  .ticket-btn {
    background-color: #331391;
    color: white;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #250e68;
    }
  }
}
</style>
