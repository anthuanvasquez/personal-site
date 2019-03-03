<template>
  <div class="navbar-brand logo">
    <a
      class="navbar-item navbar-item--logo logo__link"
      href="/"
    >
      Anthuan Vásquez
    </a>
    <a
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbar-menu"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
</template>

<style lang="scss">
  .logo {
    border-right: 1px solid $color__border;

    &__link {
      font-family: $font__logo;
      background: linear-gradient(
        to right,
        $color__linear-1,
        $color__linear-2
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 26px;
      padding-right: 35px;

      &:hover {
        color: $color__font;
        -webkit-text-fill-color: $color__font;
      }
    }
  }
</style>
