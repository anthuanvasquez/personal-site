<template>
  <section class="section section-workflow is-medium">
    <div class="container workflow">
      <section-heading :title="name" />
      <div class="columns is-multiline">
        <div class="column is-6-tablet is-3-desktop">
          <div class="design box has-text-centered">
            <span class="icon">
              <i class="fa fa-desktop" />
            </span>
            <h2 class="title is-2">
              Design
            </h2>
            <div class="text">
              Begin with a nice design.
            </div>
          </div>
        </div>
        <div class="column is-6-tablet is-3-desktop">
          <div class="develop box has-text-centered">
            <span class="icon">
              <i class="fa fa-magic" />
            </span>
            <h2 class="title is-2">
              Develop
            </h2>
            <div class="text">
              Write good code always matters.
            </div>
          </div>
        </div>
        <div class="column is-6-tablet is-3-desktop">
          <div class="bug box has-text-centered">
            <span class="icon">
              <i class="fa fa-bug" />
            </span>
            <h2 class="title is-2">
              Bug Test
            </h2>
            <div class="text">
              You see the bugs?.
            </div>
          </div>
        </div>
        <div class="column is-6-tablet is-3-desktop">
          <div class="launch box has-text-centered">
            <span class="icon">
              <i class="fa fa-plane" />
            </span>
            <h2 class="title is-2">
              Launch
            </h2>
            <div class="text">
              Ok, let's go live.
            </div>
          </div>
        </div>
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
        name: 'Work Process'
      }
    }
  }
</script>

<style lang="scss">
  .section-workflow {
    .box {
      background-color: $color__box;
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      color: $color__font;
      box-shadow: none;
      border: 1px solid $color__border-box;
      padding: 50px 20px;

      &.design {
        background-image:
          linear-gradient(
            to bottom,
            rgba($color__linear-1, 0.4),
            rgba($color__linear-2, 0.9)
          ),
          url('/design.jpg');
      }

      &.develop {
        background-image:
          linear-gradient(
            to bottom,
            rgba($color__linear-1, 0.4),
            rgba($color__linear-2, 0.9)
          ),
          url('/coding.jpg');
      }

      &.bug {
        background-image:
          linear-gradient(
            to bottom,
            rgba($color__linear-1, 0.4),
            rgba($color__linear-2, 0.9)
          ),
          url('/bug.jpg');
      }

      &.launch {
        background-image:
          linear-gradient(
            to bottom,
            rgba($color__linear-1, 0.4),
            rgba($color__linear-2, 0.9)
          ),
          url('/launch.jpg');
      }
    }

    .icon {
      font-size: 32px;
    }

    .title {
      color: $color__font;
      font-size: 32px;
      font-weight: 700;
    }
  }
</style>
