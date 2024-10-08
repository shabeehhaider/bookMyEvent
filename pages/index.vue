<template>
  <div>
    <!-- Preloader -->
    <!-- <div id="preloader-active">
      <div class="preloader d-flex align-items-center justify-content-center">
        <div class="preloader-inner position-relative">
          <div class="preloader-circle"></div>
          <div class="preloader-img pere-text">
            <img src="@/assets/img/logo/loder.png" alt="" />
          </div>
        </div>
      </div>
    </div> -->

    <!-- Header -->
    <header>
      <div class="header-area">
        <div class="main-header header-sticky">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-2 col-md-1">
                <div class="logo">
                  <a href="index.html"><img src="@/assets/img/logo/logo.png" alt="" /></a>
                </div>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10">
                <div class="menu-main d-flex align-items-center justify-content-end">
                  <div class="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="spakers.html">Speakers</a></li>
                        <li><a href="schedule.html">Schedule</a></li>
                        <li>
                          <a href="blog.html">Blog</a>
                          <ul class="submenu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog_details.html">Blog Details</a></li>
                            <li><a href="elements.html">Element</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                  <div class="header-right-btn f-right d-none d-lg-block ml-30">
                    <a href="#" class="btn header-btn">Get Your Ticket</a>
                  </div>
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

    <!-- Main Content -->
    <main>
      <!-- Slider Area -->
      <div class="slider-area position-relative">
        <div class="slider-active">
          <div class="single-slider slider-height d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-9 col-sm-10">
                  <div class="hero__caption">
                    <span data-animation="fadeInLeft" data-delay=".1s">Committed to success</span>
                    <h1 data-animation="fadeInLeft" data-delay=".5s">Digital Conference For Designers</h1>
                    <div class="slider-btns">
                      <a data-animation="fadeInLeft" data-delay="1.0s" href="industries.html" class="btn hero-btn">Download</a>
                      <a data-animation="fadeInRight" data-delay="1.0s" class="popup-video video-btn" href="https://www.youtube.com/watch?v=up68UAfH0d0">
                        <i class="fas fa-play"></i></a>
                      <p class="video-cap d-none d-sm-block" data-animation="fadeInRight" data-delay="1.0s">Story Video<br />Watch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Countdown Section -->
        <div class="counter-section d-none d-sm-block">
          <div class="cd-timer" id="countdown">
            <div class="cd-item">
              <span>96</span>
              <p>Days</p>
            </div>
            <div class="cd-item">
              <span>15</span>
              <p>Hrs</p>
            </div>
            <div class="cd-item">
              <span>07</span>
              <p>Min</p>
            </div>
            <div class="cd-item">
              <span>02</span>
              <p>Sec</p>
            </div>
          </div>
        </div>
      </div>

      <!-- About Section -->
      <section class="about-low-area section-padding2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="about-caption mb-50">
                <div class="section-tittle mb-35">
                  <h2>The Biggest Digital Conference.</h2>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available...</p>
                <p>There are many variations of passages of Lorem Ipsum available...</p>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                  <div class="single-caption mb-20">
                    <div class="caption-icon">
                      <span class="flaticon-communications-1"></span>
                    </div>
                    <div class="caption">
                      <h5>Where</h5>
                      <p>New York, United States</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                  <div class="single-caption mb-20">
                    <div class="caption-icon">
                      <span class="flaticon-education"></span>
                    </div>
                    <div class="caption">
                      <h5>When</h5>
                      <p>Jan. 21. 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" class="btn mt-50">Get Your Ticket</a>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="about-img">
                <div class="about-font-img d-none d-lg-block">
                  <img src="@/assets/img/gallery/about2.png" alt="" />
                </div>
                <div class="about-back-img">
                  <img src="@/assets/img/gallery/about1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
</script>
