<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h2 class="footer-title">Party Yacht AE</h2>
        <p class="footer-text">
            Dive into unforgettable nights on the Arabian Gulf with Party Yacht AE, where music, luxury, and stunning views unite. Join us on board and experience Dubai's finest yacht parties, featuring top DJs and premium entertainment.
        </p>
        <p class="footer-text">
            Our mission is to create exclusive and electrifying experiences for music lovers and party enthusiasts alike, taking nightlife to a new level.
        </p>
        <div class="social-icons">
            <a href="https://instagram.com/partyyachtuae" target="_blank" aria-label="Instagram">
                <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://wa.me/+971522541055" target="_blank" aria-label="WhatsApp">
                <i class="bx bxl-whatsapp"></i>
            </a>
            <a href="mailto:info@partyyacht.ae" aria-label="Email">
                <i class="bx bx-envelope"></i>
            </a>
        </div>
      </div>


      <div class="footer-section">
        <h3 class="footer-title">Company</h3>
        <ul>
            <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
            <li><NuxtLink to="/privacyPolicy">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/refundPolicy">Refund Policy</NuxtLink></li>
            <li><NuxtLink to="/termsAndConditions">Terms & Conditions</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-section">
          <h3 class="footer-title">Resources</h3>
          <ul>
              <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
              <li><NuxtLink to="/promote-your-event">Promote Your Event</NuxtLink></li>
              <li><NuxtLink to="/collab-with-us">Collab with Us</NuxtLink></li>
              <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
          </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <img src="@/assets/img/logo/logo2_footer.svg" alt="Your Company Logo" class="footer-logo" />
      <p>&copy; 2024 Party Yacht - All Rights Reserved</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
  background-color: #000;
  color: #fff;
  padding: 2rem;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  padding: 1rem;
}

.footer-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.footer-text {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.social-icons a {
  color: #fff;
  margin: 0 0.5rem;
  font-size: 1.2rem;
}

.footer-bottom {
  margin-top: 2rem;
  text-align: center;
}

.footer-logo {
  max-width: 100px;
  margin-bottom: 1rem;
}
ul{
list-style: none;
  li{
    padding: 10px;
    a{
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
