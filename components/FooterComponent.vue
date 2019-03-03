<template>
  <footer
    id="footer"
    class="footer section-lines section-lines--top"
  >
    <div class="container">
      <div class="content has-text-centered is-medium">
        <h2 class="title">
          Follow me and let's talk about tech around the world!
        </h2>
        <p class="text">
          I always putting thing on social networks, maybe will see you there.
        </p>
      </div>
      <ul class="social-links">
        <li class="social-links__item">
          <a
            class="social-links__link"
            href="https://www.facebook.com/anthuanvasquez/"
            title="Facebook"
          >
            <span class="icon is-large">
              <i class="fab fa-2x fa-facebook-f" />
            </span>
          </a>
        </li>
        <li class="social-links__item">
          <a
            class="social-links__link"
            href="https://do.linkedin.com/in/anthuanvasquez"
            title="LinkedIn"
          >
            <span class="icon is-large">
              <i class="fab fa-2x fa-linkedin-in" />
            </span>
          </a>
        </li>
        <li class="social-links__item">
          <a
            class="social-links__link"
            href="https://github.com/anthuanvasquez"
            title="Github"
          >
            <span class="icon is-large">
              <i class="fab fa-2x fa-github" />
            </span>
          </a>
        </li>
        <li class="social-links__item">
          <a
            class="social-links__link"
            href="https://twitter.com/oidoperfecto"
            title="Twitter"
          >
            <span class="icon is-large">
              <i class="fab fa-2x fa-twitter" />
            </span>
          </a>
        </li>
        <li class="social-links__item">
          <a
            class="social-links__link"
            href="https://dribbble.com/oidoperfecto"
            title="Dribbble"
          >
            <span class="icon is-large">
              <i class="fab fa-2x fa-dribbble" />
            </span>
          </a>
        </li>
        <li class="social-links__item">
          <a
            class="social-links__link"
            href="https://codepen.io/oidoperfecto"
            title="Codepen"
          >
            <span class="icon is-large">
              <i class="fab fa-2x fa-codepen" />
            </span>
          </a>
        </li>
      </ul>
      <div class="newsletter">
        <p class="content has-text-centered is-medium">
          Join my monthly newsletter for valuable information including useful recommendations, updates on new work, articles, gear, and people.
        </p>
        <form action="#">
          <div class="field has-addons">
            <p class="control has-icons-left is-expanded">
              <input
                class="input is-large"
                type="text"
                placeholder="Your email"
              >
              <span class="icon is-medium is-left">
                <i class="fas fa-envelope fa-lg" />
              </span>
            </p>
            <p class="control">
              <a class="button is-static is-large">
                Subscribe
              </a>
            </p>
          </div>
        </form>
      </div>
      <div class="columns">
        <div class="column">
          <div class="box first">
            <h3 class="title is-5">Thank you for visiting my page.</h3>
            <p>When I'm not writing code you can find me trying to learn new things, playing video games, trying new restaurants, trying out new tech, taking a coke or making music.</p>
          </div>
        </div>
        <div class="column">
          <div class="box middle">
            <h3 class="title is-5">People are the essence of the tech industry.</h3>
            <p>Without people, we would have no clear purpose in our work. I believe in helping people feel welcomed and included when it comes to my work and who I am as a person.</p>
          </div>
        </div>
        <div class="column">
          <div class="box last">
            <h3 class="title is-5">Get in touch.</h3>
            <p>
              If you have any questions feel free to reach out at <a href="mailtto:me@anthuanvasquez.net"><i class="fas fa-envelope" /> me@anthuanvasquez.net</a>. I'm excited for our session and to meet you!.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      id="copyrights"
      class="copyrights"
    >
      <div class="container has-text-centered">
        <p>
          Copyrights 2019. <span>Designed</span>, <span>Created</span> and <span>Develop</span> by <strong><a href="/">Anthuan Vásquez</a></strong>.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  .footer {
    background-color: $color__background;
    color: $color__font;
    padding: 6rem 0 0;

    .title {
      font-weight: 700;
      margin: 0 0 5px 0;
    }

    .title,
    .subtitle,
    .text {
      color: $color__font;
    }

    .box {
      color: $color__font;
      background-color: transparent;
      font-size: 18px;
    }

    .copyrights {
      background-color: darken($color__background, 2%);
      margin-top: 20px;
      padding: 3rem 0;

      span {
        font-weight: 700;

        &:nth-child(1) {
          color: $color__linear-1;
        }

        &:nth-child(2) {
          color: $color__linear-2;
        }

        &:nth-child(3) {
          color: mix($color__linear-1, $color__linear-2);
        }
      }

      a {
        color: $color__font;

        &:hover {
          background: linear-gradient(
            to right,
            $color__linear-1,
            $color__linear-2
          );
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }

  .footer-nav {
    &__link {
      color: $color__font;
      text-transform: uppercase;

      &:hover {
        background: linear-gradient(
          to right,
          $color__linear-1,
          $color__linear-2
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;

        i {
          color: $color__linear-2;
          -webkit-text-fill-color: $color__linear-2;
        }
      }
    }
  }

  .newsletter {
    max-width: 800px;
    margin: 0 auto 6rem;

    .button {
      color: $color__font;
      border: 0;
      background-color: transparent;
      background-image: linear-gradient(
        to right,
        $color__linear-1,
        $color__linear-2
      );

      &:hover {
        background-image: linear-gradient(
          to right,
          $color__linear-1,
          $color__linear-2
        );
      }
    }
  }

  .social-links {
    padding: 3rem 0;
    text-align: center;

    &__item {
      display: inline-block;
      margin: 0 10px;
    }

    &__link {
      color: $color__font;
    }

    .icon {
      border: double 4px transparent;
      border-radius: 80px;
      width: 80px;
      height: 80px;
      color: #fff;
      background-image:
        linear-gradient(
          $color__background,
          $color__background
        ),
        radial-gradient(
          circle at top left,
          $color__linear-1,
          $color__linear-2,
          $color__background 50%
        );
      background-origin: border-box;
      background-clip: content-box, border-box;
      transition: 0.2s;

      &:hover {
        background-image:
          linear-gradient(
            $color__background,
            $color__background
          ),
          radial-gradient(
            circle at top left,
            $color__linear-1,
            $color__linear-2,
            $color__background
          );
      }
    }
  }
</style>
