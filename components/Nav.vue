<template>
  <header ref="header">
    <div class="header-area">
      <div class="main-header" :class="{ 'header-sticky': isSticky }">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-1">
              <div class="logo">
                <nuxt-link to="/">
                  <img src="@/assets/img/logo/logo.png" alt="Evento Logo" />
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
                      <nuxt-link to="/privacyPolicy">Policy</nuxt-link>
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
              <div class="header-right-btn d-flex justify-content-end">
                <nuxt-link to="/events" class="btn header-btn">Get Your Ticket</nuxt-link>
              </div>
            </div>
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
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

const handleScroll = () => {
  isSticky.value = window.scrollY > 500;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  </style>
  
  <style lang="scss">

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

  .boxed-btn {
    background: #fff;
    display: inline-block;
    padding: 18px 44px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    border: 0;
    letter-spacing: 3px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    &:focus {
      outline: none;
    }
    &.large-width {
      width: 220px;
    }
  }
  
  /* Header Area */
  .header-area {
    .main-header {
      padding: 20px 10px;
      .main-menu {
        ul {
            margin: 0;
          li {
            display: inline-block;
            position: relative;
            z-index: 1;
            a {
              color: #112957;
              font-weight: 400;
              padding: 20px 15px;
              display: block;
              font-size: 16px;
              text-transform: capitalize;
              font-family: 'Sen', sans-serif;
              font-family: "Roboto", sans-serif;
              transition: color 0.3s ease;
              text-decoration: none;
              &:hover {
                color: #331391; /* Change color on hover */
              }
            }
          }
        }
        & ul.submenu{
            position: absolute;
            width: 220px;
            background: rgba(255, 255, 255, 0.9);
            left: 0;
            top: 80%;
            visibility: hidden;
            opacity: 0;
            box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
            padding: 17px 0;
            border-radius: 20px;
            
            // border-top: 5px solid #331391;
            & > li{
                margin-left: 7px;
                display: block;
                & > a{
                    padding: 6px 10px;
                    font-size: 16px;
                    text-transform: capitalize;
                    margin: 0;
                    &:hover{
                        color: #331391;
                        background: none;
                    }
                }
            } 
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
      background-color: #250e68; /* Darker purple on hover */
    }
  }
  
  /* Transparent Header */
  .header-transparent {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }
  
  /* Header Sticky */
  .header-sticky.sticky-bar.sticky .main-menu ul li a {
    padding: 20px 20px;
  }

  
  .header-area .main-menu ul > li:hover > ul.submenu {
    visibility: visible;
    opacity: 1;
    top: 100%;
  }
  
  /* Mobile Menu */
  .mobile_menu {
    position: absolute;
    right: 0px;
    width: 100%;
    z-index: 99;
  }
  
  .gray-bg {
    background: #f7f7fd;
  }
  .white-bg {
    background: #ffffff;
  }
  .black-bg {
    background: #16161a;
  }
  .theme-bg {
    background: #331391;
  }
  </style>
  