<template>
  <header id="header">
    <nav
      class="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <logo />

      <div
        id="navbar-menu"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <a
            class="navbar-item navbar-item--home"
            href="/"
          >
            <span class="icon"><i class="fa fa-home" /></span> Home
          </a>
          <a
            class="navbar-item navbar-item--music"
            href="https://oidoperfecto.net"
            target="_blank"
          >
            <span class="icon"><i class="fa fa-music" /></span> Music
          </a>
          <a
            class="navbar-item"
            href="mailto:me@anthuanvasquez.net"
          >
            <span class="icon"><i class="fas fa-envelope" /></span> Get In Touch
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from '../components/Logo'

export default {
  components: {
    Logo
  },

  data() {
    return {
      scrollPosition: null
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  methods: {
    updateScroll() {
      const navBar = document.getElementById('header');
      this.scrollPosition = window.scrollY

      if (this.scrollPosition > 0) {
        navBar.classList.add('header-sticky');
      }
      else {
        navBar.classList.remove('header-sticky');
      }
    }
  }
}
</script>

<style lang="scss">
  .navbar {
    background: transparent;
    border-bottom: 1px solid transparent;
    transition: background 0.2s;

    .header-sticky & {
      background: $color__background;
      border-color: $color__border;
    }
  }

  .navbar-item,
  .navbar-link {
    color: $color__font;
    font-weight: 400;

    .icon {
      color: $color__icon;

      &:only-child {
        margin-right: 5px;
      }
    }
  }

  a.navbar-item:hover,
  a.navbar-item.is-active,
  .navbar-link:hover,
  .navbar-link.is-active {
    background: $color__box;
    color: $color__font;
  }
</style>
