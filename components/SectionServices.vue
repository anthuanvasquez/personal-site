<template>
  <section class="section section-services is-medium">
    <div class="container services">
      <section-heading :title="name" />
      <div class="columns is-multiline">
        <div class="column is-12-mobile is-6-tablet is-4-desktop">
          <div class="box has-text-centered">
            <span class="icon is-large">
              <i class="fas fa-2x fa-code" />
            </span>
            <p class="heading">
              Front-End
            </p>
            <p class="title">
              creating visual appearance of the web sites thinking in the users.
            </p>
          </div>
        </div>
        <div class="column is-12-mobile is-6-tablet is-4-desktop">
          <div class="box has-text-centered">
            <span class="icon is-large">
              <i class="fab fa-2x fa-wpforms" />
            </span>
            <p class="heading is-1">
              Web Apps
            </p>
            <p class="title">
              developing simple web apps using modern tools.
            </p>
          </div>
        </div>
        <div class="column is-12-mobile is-6-tablet is-4-desktop">
          <div class="box has-text-centered">
            <span class="icon is-large">
              <i class="fas fa-2x fa-code-branch" />
            </span>
            <p class="heading">
              Code Review
            </p>
            <p class="title">
              smelly code? i know what it takes to write high quality code.
            </p>
          </div>
        </div>
        <div class="column is-12-mobile is-6-tablet is-4-desktop">
          <div class="box has-text-centered">
            <span class="icon is-large">
              <i class="fa fa-2x fa-keyboard" />
            </span>
            <p class="heading">
              PSD to Web
            </p>
            <p class="title">
              show me how you want your website to look and i start coding for you.
            </p>
          </div>
        </div>
        <div class="column is-12-mobile is-6-tablet is-4-desktop">
          <div class="box has-text-centered">
            <span class="icon is-large">
              <i class="fab fa-2x fa-wordpress-simple" />
            </span>
            <p class="heading">
              WordPress
            </p>
            <p class="title">
              developing wordpress themes, plugins and ecommerce web sites.
            </p>
          </div>
        </div>
        <div class="column is-12-mobile is-6-tablet is-4-desktop">
          <div class="box has-text-centered">
            <span class="icon is-large">
              <i class="fa fa-2x fa-question-circle" />
            </span>
            <p class="heading">
              Consulting
            </p>
            <p class="title">
              let's talk and let me know your problem.
            </p>
          </div>
        </div>
      </div>
      <div class="content has-text-centered">
        <h3 class="subtitle is-3">
          Like Our Services? Get an
          <a
            class="button is-primary is-inverted is-outlined is-large"
            href="/"
          >
            <span class="icon is-small">
              <i class="fa fa-file-invoice-dollar" />
            </span>
            <span>INSTANT QUOTE</span>
          </a>
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
  import SectionHeading from '../components/SectionHeading'

  export default {
    components: {
      SectionHeading
    },

    data() {
      return {
        name: 'Services'
      }
    }
  }
</script>

<style lang="scss">
  .services {
    .icon {
      &.is-large {
        border: double 4px transparent;
        border-radius: 80px;
        width: 80px;
        height: 80px;
        color: #fff;
        background-image:
          linear-gradient(
            $color__radial-3,
            $color__radial-3
          ),
          radial-gradient(
            circle at top left,
            $color__linear-1,
            $color__linear-2
          );
        background-origin: border-box;
        background-clip: content-box, border-box;;
      }
    }

    .box {
      border-radius: 16px;
      background: $color__box;
      box-shadow: -1rem 0 3rem $color__shadow;
      padding: 30px;
      transition: 0.2s;
      min-height: 220px;

      &:hover {
        transform: scale(1.1);
        z-index: 10;
      }

      .heading {
        color: $color__font;
        font-size: 20px;
        font-weight: 700;
        margin-top: 15px;
      }

      .title {
        color: $color__font-dark;
        font-size: 14px;
        font-weight: 400;
      }
    }

    .content {
      color: $color__font;
      margin-top: 40px;

      .subtitle {
        color: inherit;
        font-weight: 400;
        margin-bottom: 0;
        line-height: 54px;
      }

      .button {
        margin-left: 10px;
      }
    }
  }
</style>
