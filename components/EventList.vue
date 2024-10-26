<template>
  <section class="event-section">
    <div class="container">
      <div class="row">
        <div v-for="(event, index) in eventsData" :key="index" class="col-lg-4 col-md-6 d-flex">
          <div class="event-card">
            <h2>{{ event.title }}</h2>
            <p>{{ event.description }}</p>
            <ul class="event-info">
              <li><strong>Date:</strong> {{ event.date }}</li>
              <li><strong>Location:</strong> {{ event.location }}</li>
            </ul>
            <nuxt-link :to="event.link" class="btn">Get Tickets </nuxt-link> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { eventsData } from './composables/eventsData';

const events = eventsData;
console.log(events,"events");

</script>

<style scoped>
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
  align-items: stretch; /* Makes all columns the same height */
}

.event-card {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures content is spread out inside the card */
  width: 100%;
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
</style>
