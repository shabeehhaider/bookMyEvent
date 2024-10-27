<template>
  <header ref="header">
    <div class="header-area">
      <div class="main-header" :class="{ 'header-sticky': isSticky }">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <div class="logo">
                <nuxt-link to="/">
                  <img src="../assets/img/logo/partyLogo.png" alt="Evento Logo" />
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-10">
              <div class="menu-main d-flex align-items-center">
                <nav class="main-menu d-none d-lg-block">
                  <ul id="navigation">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/events">Events</nuxt-link></li>
                    <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                    <li>
                      <nuxt-link>Policy</nuxt-link>
                      <ul class="submenu">
                        <li><nuxt-link to="/privacyPolicy">Privacy Policy</nuxt-link></li>
                        <li><nuxt-link to="/refundPolicy">Refund Policy</nuxt-link></li>
                        <li><nuxt-link to="/termsAndConditions">Terms and Conditions</nuxt-link></li>
                      </ul>
                    </li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-1">
              <div class="header-right-btn d-none d-lg-flex justify-content-end">
                <nuxt-link to="/events" class="btn header-btn">Get Your Ticket</nuxt-link>
              </div>
              <!-- Mobile menu toggle button -->
              <div class="mobile_menu_toggle d-flex d-lg-none justify-content-end" @click="toggleMobileMenu">
                <span :class="{ 'open': isMobileMenuOpen }"></span>
              </div>
            </div>
            <!-- Mobile menu container -->
            <div class="col-12">
              <div class="mobile-menu-container" v-if="isMobileMenuOpen">
                <ul>
                  <li><nuxt-link to="/" @click="toggleMobileMenu">Home</nuxt-link></li>
                  <li><nuxt-link to="/about" @click="toggleMobileMenu">About</nuxt-link></li>
                  <li><nuxt-link to="/events" @click="toggleMobileMenu">Events</nuxt-link></li>
                  <li><nuxt-link to="/gallery" @click="toggleMobileMenu">Gallery</nuxt-link></li>
                  <li><nuxt-link to="/privacyPolicy" @click="toggleMobileMenu">Privacy Policy</nuxt-link></li>
                  <li><nuxt-link to="/refundPolicy" @click="toggleMobileMenu">Refund Policy</nuxt-link></li>
                  <li><nuxt-link to="/termsAndConditions" @click="toggleMobileMenu">Terms and Conditions</nuxt-link></li>
                  <li><nuxt-link to="/contact" @click="toggleMobileMenu">Contact</nuxt-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isSticky = ref(false);
const isMobileMenuOpen = ref(false);

// Function to handle sticky header on scroll
const handleScroll = () => {
  isSticky.value = window.scrollY > 104;
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

</style>

<style lang="scss" scoped>

.header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.header-area {
  .main-header {
    padding: 20px 10px;
    .main-menu ul {
      margin: 0;
      li {
        display: inline-block;
        position: relative;
        a {
          color: #112957;
          font-weight: 400;
          padding: 20px 15px;
          font-size: 16px;
          text-transform: capitalize;
          font-family: 'Roboto', sans-serif;
          transition: color 0.3s ease;
          text-decoration: none;
          &:hover {
            color: #331391;
          }
        }
      }
      /* Desktop submenu style */
      ul.submenu {
        position: absolute;
        width: 220px;
        background: rgba(255, 255, 255, 0.9);
        visibility: hidden;
        opacity: 0;
        box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
        padding: 17px 0;
        border-radius: 20px;
        top: 100%;
      }
      li:hover > ul.submenu {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}

/* Button styles */
.header-right-btn .btn {
  background-color: #331391;
  color: white;
  padding: 10px 25px;
  font-size: 14px;
  border-radius: 5px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #250e68;
  }
}

/* Mobile-specific styles */
@media (max-width: 991px) {
  .header-right-btn {
    display: none;
  }
  .main-menu {
    display: none;
  }

  .mobile_menu_toggle {
    cursor: pointer;
    width: 30px;
    height: 20px;
    position: absolute;
    right: 20px;
    top: 30px;
    span {
      position: absolute;
      width: 100%;
      height: 3px;
      background: #333;
      transition: 0.3s;
      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background: #333;
      }
      &::before {
        top: -8px;
      }
      &::after {
        top: 8px;
      }
    }
    &.open span {
      background: transparent;
      &::before {
        transform: rotate(45deg);
        top: 0;
      }
      &::after {
        transform: rotate(-45deg);
        top: 0;
      }
    }
  }

  .mobile-menu-container {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 999;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    ul {
      list-style: none;
      padding: 0;
      li {
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        a {
          color: #112957;
          font-weight: 400;
          text-decoration: none;
        }
      }
    }
  }
}

.logo{
  img{
    width: 150px;
  }
}
</style>
