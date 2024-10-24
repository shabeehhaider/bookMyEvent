<template>
  <section class="event-section">
    <div class="container">
      <div class="row">
        <!-- Event Card 1 -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="event-card">
            <h2>Yacht Party</h2>
            <p>
              Get Ready for the Ultimate Yacht Party! Join us for an unforgettable night aboard a luxurious yacht. 
              Dance the night away with electrifying beats from our top-tier DJs, and expect an incredible vibe!
            </p>
            <ul class="event-info">
              <li><strong>Date:</strong> November 2 2024</li>
              <li><strong>Location:</strong> Dubai, United Arab Emirates</li>
            </ul>
            <a href="#" class="btn">Get Tickets</a>
          </div>
        </div>

        <!-- Event Card 2 -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="event-card">
            <h2>Yacht Party</h2>
            <p>
              Get Ready for the Ultimate Yacht Party! Join us for an unforgettable night aboard a luxurious yacht. 
              Dance the night away with electrifying beats from our top-tier DJs, and expect an incredible vibe!
            </p>
            <ul class="event-info">
              <li><strong>Date:</strong> November 9 2024</li>
              <li><strong>Location:</strong> Dubai, United Arab Emirates</li>
            </ul>
            <a href="#" class="btn">Get Tickets</a>
          </div>
        </div>

        <!-- Event Card 3 -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="event-card">
            <h2>Yacht Party</h2>
            <p>
              Get Ready for the Ultimate Yacht Party! Join us for an unforgettable night aboard a luxurious yacht. 
              Dance the night away with electrifying beats from our top-tier DJs, and expect an incredible vibe!
            </p>
            <ul class="event-info">
              <li><strong>Date:</strong> December 31 2024</li>
              <li><strong>Location:</strong> Sydney, Australia</li>
            </ul>
            <a href="#" class="btn">Get Tickets</a>
          </div>
        </div>

        <!-- Event Card 4 -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="event-card">
            <h2>Yacht Party</h2>
            <p>
              Get Ready for the Ultimate Yacht Party! Join us for an unforgettable night aboard a luxurious yacht. 
              Dance the night away with electrifying beats from our top-tier DJs, and expect an incredible vibe!
            </p>
            <ul class="event-info">
              <li><strong>Date:</strong> June 10 2025</li>
              <li><strong>Location:</strong> Ibiza, Spain</li>
            </ul>
            <a href="#" class="btn">Get Tickets</a>
          </div>
        </div>

        <!-- Event Card 5 -->
        <div class="col-lg-4 col-md-6 d-flex">
          <div class="event-card">
            <h2>Yacht Party</h2>
            <p>
              Get Ready for the Ultimate Yacht Party! Join us for an unforgettable night aboard a luxurious yacht. 
              Dance the night away with electrifying beats from our top-tier DJs, and expect an incredible vibe!
            </p>
            <ul class="event-info">
              <li><strong>Date:</strong> August 14 2025</li>
              <li><strong>Location:</strong> Banff, Canada</li>
            </ul>
            <a href="#" class="btn">Get Tickets</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
