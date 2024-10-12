<template>
    <header>
      <div class="header-area">
        <div class="main-header header-sticky">
          <div class="container-fluid">
            <div class="row align-items-center">
              <!-- Logo Section -->
              <div class="col-xl-2 col-lg-2 col-md-1">
                <div class="logo">
                  <a href="index.html">
                    <img src="@/assets/img/logo/logo.png" alt="Evento Logo" />
                  </a>
                </div>
              </div>
              <!-- Navigation Menu -->
              <div class="col-xl-8 col-lg-8 col-md-10">
                <div class="menu-main d-flex align-items-center justify-content-center">
                  <nav class="main-menu d-none d-lg-block">
                    <ul id="navigation">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="speakers.html">Speakers</a></li>
                      <li><a href="schedule.html">Schedule</a></li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!-- Button Section -->
              <div class="col-xl-2 col-lg-2 col-md-1">
                <div class="header-right-btn d-flex justify-content-end">
                  <a href="#" class="btn header-btn">Get Your Ticket</a>
                </div>
              </div>
              <!-- Mobile Menu -->
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
  // No JavaScript needed for static header
  </script>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  </style>
  
  <style lang="scss">

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
      color: #fff !important;
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
      padding: 20px 130px;
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
    padding: 20px 20px !important;
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
  