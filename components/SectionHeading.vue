<template>
  <h2 class="section-heading">
    <span class="section-heading__text">
      {{ title }}
    </span>
  </h2>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
.section-heading {
  font-size: 42px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  padding: 40px 0;
  margin-bottom: 40px;
  position: relative;
  letter-spacing: 5px;

  &__text {
    padding: 10px 40px;
    background: linear-gradient(
      to right,
      $color__linear-1,
      $color__linear-2
    );
    border-radius: 10px;
    position: relative;
    z-index: 1;
    display: block;
    max-width: 520px;
    margin: 0 auto;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    width: 140px;
    height: 140px;
    border-radius: 16px;
    background-color: $color__icon;
    transform: translateY(-50%);
    z-index: 0;
  }
}
</style>
