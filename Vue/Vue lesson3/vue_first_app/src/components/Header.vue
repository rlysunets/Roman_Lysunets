<template>
  <header id="header" :class="{ 'fixed': isFixed }">
    <div class="header-content clearfix">
      <a class="logo" href="/">
        <img src="../assets/images/logo.png" alt="logo">
      </a>
      <nav class="navigation" role="navigation">
        <ul class="primary-nav">
          <router-link to="/features">Features</router-link>
          <router-link to="/works">Works</router-link>

          <!-- <li><a href="#teams">Our Team</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#download">Download</a></li> -->
        </ul>
      </nav>
      <a href="#" class="nav-toggle" :class="{ 'close-nav': isOpen }" @click="toggleMobileMenu">Menu<span></span></a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
      isOpen: false
    }
  },
  created() {
    window.addEventListener("scroll", this.toggleFixedScroll)
  },
  methods: {
    toggleFixedScroll() {
      this.isFixed = window.scrollY > 50
    },
    toggleMobileMenu() {
      this.isOpen = !this.isOpen
    }
  }
}

</script>
