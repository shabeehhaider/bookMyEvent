<template>
  <section class="event-section" id="events-list">
    <div class="container">
      <div class="row">
        <div v-for="(event, index) in events" :key="index" class="col-lg-4 col-md-4 d-flex">
          <nuxt-link :to="event.selectedEvent" class="event-card">
            <img src="@/assets/img/hero/event-2.png" alt="event Image" />
            <div class="card-description">
              <ul class="event-info">
                <li><strong>Date:</strong> {{ event.date }}</li>
                <li><strong>Location:</strong> {{ event.location }}</li>
              </ul>
            </div>
            <nuxt-link to="/login" class="btn">Get Tickets</nuxt-link> 
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { eventsData } from './composables/eventsData';
import { onMounted } from 'vue';

const events = eventsData;

</script>


<style lang="scss" scoped>
.event-section {
  padding: 40px 0;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-lg-4,
.col-md-6 {
  display: flex;
  align-items: stretch; 
}

.event-card {
  background-color: #f9f9f9;
  padding-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures content is spread out inside the card */
  width: 100%;
  color: inherit;
  text-decoration: none;

  .card-description{
    padding: 30px 10px 0;
  }
}

.event-card h2 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
}

.event-card p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.event-info {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.event-info li {
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
}

.event-info strong {
  color: #000;
}

.btn {
  background-color: #331391;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.3s ease;
  align-self: center;
}

.btn:hover {
  background-color: #250e68;
}

.event-card img{
  border-radius: 10px 10px 0 0;
}

.counter-section {
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #fff; /* Add background color to distinguish the section */
  border-radius: 10px; /* Match the card's border radius */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  margin: 20px; /* Add margin for spacing */
}

.cd-timer {
  display: flex; /* Ensure items are aligned in a row */
  justify-content: center; /* Center the timer items */
  margin-top: 10px; /* Reduce margin */
  margin-bottom: 10px; /* Reduce margin */

  .cd-item {
    margin-right: 8px; /* Reduce space between items */
    padding: 5px; /* Reduce padding */
    height: 50px; /* Decrease height */
    width: 60px; /* Decrease width */
    position: relative;
    display: inline-block;
    text-align: center;

    &:after {
      position: absolute;
      right: -5px; /* Adjust position */
      top: 8px; /* Adjust position */
      width: 6px; /* Decrease size */
      height: 6px; /* Decrease size */
      content: '';
      border-radius: 50%;
      background: #333;
    }

    &::before {
      position: absolute;
      right: -5px; /* Adjust position */
      bottom: 25px; /* Adjust position */
      width: 6px; /* Decrease size */
      height: 6px; /* Decrease size */
      content: '';
      border-radius: 50%;
      background: #333;
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
      font-size: 30px; /* Decrease font size */
      color: #333;
      font-weight: 400;
      line-height: 20px; /* Adjust line height */
      margin-bottom: 10px; /* Reduce margin */
      display: inline-block;
    }

    p {
      font-size: 12px; /* Decrease font size */
      color: #333;
      margin-bottom: 0;
      line-height: 20px; /* Adjust line height */
      text-transform: uppercase;
    }
  }
}

.counter-text {
  span {
    font-size: 14px; /* Adjust font size */
    color: #ffffff;
  }

  h3 {
    color: #ffffff;
    font-weight: 700;
    line-height: 28px; /* Adjust line height */
    margin-top: 5px; /* Adjust margin */
  }
}

</style>