<template>
  <div id="wrapper">
    <header-component />
    <nuxt />
    <footer-component />
  </div>
</template>

<script>
  import HeaderComponent from '~/components/HeaderComponent'
  import FooterComponent from '~/components/FooterComponent'

  export default {
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style lang="scss">
  :root{
    --color: #95e9ef;
    --color-background: #100e16;
    --color-font: #fff;
    --color-font-dark: #7a7a8c;
    --color-linear-1: #ff8a00;
    --color-linear-2: #da1b60;
    --spacing: 1rem;
    --speed: 1700ms;
    --fontsize: 2rem;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    font-family: $font__body;
    font-size: $font-size;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-height: 100%;
    width: 100%;
  }

  body {
    background-color: $color__background;
    color: $color__font;
    position: relative;
  }

  #header:not(.header-sticky) {
    .navbar {
      top: 64px;
    }
  }

  .content h1,
  .content h2,
  .content h3,
  .content h4,
  .content h5,
  .content h6,
  .title,
  .subtitle {
    color: $color__font;
  }

  a {
    color: mix($color__linear-1, $color__linear-2);

    &:hover {
      color: $color__linear-2;
    }
  }

  .section-lines {
    position: relative;

    &:before {
      content: '';
      border: 0;
      height: 5px;
      margin: 0;
      background-image: linear-gradient(
        to right,
        $color__linear-1,
        $color__linear-2
      );
      border-radius: 5px;
      width: 80%;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1;
    }

    &--top {
      &:before {
        top: 0;
        bottom: auto;
      }
    }
  }
</style>
