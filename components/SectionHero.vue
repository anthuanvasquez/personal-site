<template>
  <section class="hero-group">
    <div class="columns is-half is-gapless is-multiline">
      <div class="column is-12-tablet is-6-desktop">
        <section class="hero hero--left is-fullheight">
          <div class="hero-body">
            <div
              class="hero-text has-text-centered"
              itemscope
              itemtype="http://schema.org/Person"
            >
              <h2 class="subtitle">
                Hi
              </h2>
              <h1 class="title is-1">
                I'm <span itemprop="name">Anthuan Vásquez</span>
              </h1>
              <h2 class="subtitle is-2">
                <span itemprop="jobTitle">
                  A Front End Developer
                </span>
              </h2>
              <p
                class="town-text"
                itemprop="address"
                itemscope
                itemtype="http://schema.org/PostalAddress"
              >
                Based in MC, <span itemprop="addressLocality">Dominican Republic</span>.
              </p>
              <p class="job-text">
                Currently working on
              </p>
              <logo-brand />
            </div>
          </div>
        </section>
      </div>
      <div class="column is-12-tablet is-6-desktop">
        <section class="hero hero--right is-fullheight">
          <div
            :style="{
              backgroundImage: 'url(' + images[currentNumber % images.length] + ')'
            }"
            class="hero-body"
          >
            <h2
              id="text-slide"
              class="title has-text-centered"
            >
              {{ text[currentNumber % text.length] }}
            </h2>
            <div class="hero-image-gradient" />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
  import LogoBrand from '../components/LogoBrand'

  export default {
    components: {
      LogoBrand
    },

    data() {
      return {
        images: [
          '/muelle.jpg',
          '/reloj.jpg',
          '/morro.jpg'
        ],
        text: [
          'Creative.',
          'Different.',
          'Awesome.'
        ],
        duration: 7000,
        currentNumber: 0,
        timer: null
      }
    },

    mounted() {
      this.startRotation()
    },

    methods: {
      startRotation() {
        this.timer = setInterval(this.next, this.duration)

        const textSlide = document.getElementById('text-slide')
        textSlide.style.opacity = '1'
        textSlide.classList.add('animated', 'fadeIn')
      },

      stopRotation() {
        clearTimeout(this.timer)
        this.timer = null
      },

      next() {
        this.currentNumber += 1

        const textSlide = document.getElementById('text-slide')
        textSlide.classList.remove('animated', 'fadeIn')
        textSlide.style.opacity = '0'

        setTimeout(() => {
          textSlide.style.opacity = '1'
          textSlide.classList.add('animated', 'fadeIn')
        }, 300)
      }
    }
  }
</script>

<style lang="scss">
  .hero-group {
    border-bottom: 1px solid $color__border;

    .columns {
      position: relative;
    }
  }

  .hero {
    &--left {
      background-color: $color__background;

      .hero-text {
        width: 100%;
      }
    }

    &--right {
      .hero-body {
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        position: relative;
      }

      .title {
        font-size: 80px;
        opacity: 0;
        width: 100%;
        z-index: 1;
        transition: 0.2s;
      }
    }
  }

  .hero-image-gradient {
    background-image: linear-gradient(
      to bottom,
      rgba($color__linear-1, 0.5),
      rgba($color__linear-2, 0.9)
    );
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
</style>
