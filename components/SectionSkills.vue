<template>
  <section class="section section-skills is-medium">
    <div class="container skills">
      <section-heading :title="name" />
      <div class="field is-grouped is-grouped-multiline">
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">HTML5</span>
            <span class="tag is-large">10</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">CSS3</span>
            <span class="tag is-large">10</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">SASS</span>
            <span class="tag is-large">10</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">JavaScript</span>
            <span class="tag is-large">9</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">jQuery</span>
            <span class="tag is-large">9</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">Vue.js</span>
            <span class="tag is-large">6</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">Node.js</span>
            <span class="tag is-large">5</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">PHP</span>
            <span class="tag is-large">7</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">Magento</span>
            <span class="tag is-large">8</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">WordPress</span>
            <span class="tag is-large">8</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">Bootstrap</span>
            <span class="tag is-large">10</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">Bulma</span>
            <span class="tag is-large">8</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-large">UI/UX</span>
            <span class="tag is-large">7</span>
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
        name: 'Skills'
      }
    }
  }
</script>

<style lang="scss">
  .skills {
    .tags {
      .tag:nth-child(1) {
        background-color: transparent;
        background-image: linear-gradient(
          to right,
          $color__linear-1,
          $color__linear-2
        );
        color: $color__font;
      }
    }

    .field {
      &.is-grouped {
        justify-content: center;

        > .control {
          cursor: pointer;
          margin: 0 5px;
          transition: 0.2s;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
</style>
