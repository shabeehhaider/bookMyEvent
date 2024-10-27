<template>
  <section class="event-section" id="events-list">
    <div class="container">
      <div class="row">
        <div v-for="(event, index) in events" :key="index" class="col-lg-4 col-md-6 d-flex">
          <div class="event-card">
            <h2>{{ event.title }}</h2>
            <p>{{ event.description }}</p>
            <ul class="event-info">
              <li><strong>Date:</strong> {{ event.date }}</li>
              <li><strong>Location:</strong> {{ event.location }}</li>
            </ul>
            <div class="counter-section d-block">
              <div class="cd-timer" :id="'countdown-' + index"> <!-- Dynamic ID -->
                  <div class="cd-item">
                    <span :id="'days-' + index">96</span>
                    <p>Days</p>
                  </div>
                  <div class="cd-item">
                    <span :id="'hours-' + index">15</span>
                    <p>Hrs</p>
                  </div>
                  <div class="cd-item">
                    <span :id="'minutes-' + index">07</span>
                    <p>Min</p>
                  </div>
                  <div class="cd-item">
                    <span :id="'seconds-' + index">02</span>
                    <p>Sec</p>
                  </div>
              </div>
            </div>
            <nuxt-link :to="event.link" class="btn">Get Tickets</nuxt-link> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { eventsData } from './composables/eventsData';
import { onMounted } from 'vue';

const events = eventsData;

// Function to start the countdown timer
function startCountdown(eventDate, index) {
    const countdownElement = document.getElementById(`countdown-${index}`);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Add leading zero to days, hours, minutes, and seconds if they are less than 10
      const formattedDays = days < 10 ? '0' + days : days;
      const formattedHours = hours < 10 ? '0' + hours : hours;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

      // Display the result in the respective elements
      document.getElementById(`days-${index}`).innerHTML = formattedDays;
      document.getElementById(`hours-${index}`).innerHTML = formattedHours;
      document.getElementById(`minutes-${index}`).innerHTML = formattedMinutes;
      document.getElementById(`seconds-${index}`).innerHTML = formattedSeconds;

      // If the countdown is finished, stop the countdown
      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "Event Started!";
      }
    };

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run once to prevent delay
}

onMounted(() => {
  events.forEach((event, index) => {
    // Create a date object for the event date
    const eventDate = new Date(event.date); // Ensure `event.date` is in a valid format
    // Start the countdown for each event
    startCountdown(eventDate.getTime(), index);
  });
});
</script>



<style scoped lang="scss">
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

.counter-section {
  display: flex;
  justify-content: center; /* Center the countdown section */
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
    // background-color: rgba(0, 0, 0, 0.4); /* Dark overlay behind text */
    // border-radius: 10px;
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
