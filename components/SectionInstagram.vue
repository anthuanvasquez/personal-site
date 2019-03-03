<template>
  <section class="section section-instagram">
    <div class="instagram-grid-wrap">
      <div class="instagram-grid">
        <template v-if="grams.length > 0">
          <div
            v-for="(gram, index) in grams"
            v-if="index <= limit"
            :key="gram.id"
            class="instagram-grid__item"
          >
            <a
              :href="gram.link"
              class="instagram-grid__link"
            >
              <div
                :style="{ backgroundImage: 'url(' + gram.images.standard_resolution.url + ')' }"
                class="instagram-grid__image"
              />
            </a>
          </div>
        </template>

        <div
          v-else
          class="instagram-grid-loading"
        />

        <div
          v-if="error"
          class="instagram-grid-error"
        >
          Sorry, the Instagrams couldn't be fetched.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        access_token: "504465502.43dd505.206d45e44de148c5861f68219eb409ea",
        url: "https://api.instagram.com/v1/users/self/media/recent/",
        username: "oidoperfecto",
        grams: [],
        limit: 7,
        next_url: "",
        error: false
      }
    },
    computed: {
      instapage() {
        return 'https://www.instagram.com/' + this.username
      }
    },
    mounted() {
      this.getGrams();
    },
    methods: {
      getGrams() {
        axios.get(this.url + "?access_token=" + this.access_token)
          .then(({data}) => {
            this.grams = data.data
            this.username = data.data[0].user.username
            this.next_url = data.pagination.next_url
          })
          .catch(function (error) {
            console.log(error)
            this.error = true
          });
      },
      getMoreGrams() {
        axios.get(this.next_url)
          .then(({data}) => {
            this.grams = this.grams.concat(data.data)
            this.next_url = data.pagination.next_url
          })
          .catch(function (error) {
            console.log(error)
            this.error = true
          });
        }
      }
    }
</script>

<style lang="scss">
  .section-instagram {
    padding: 9rem 0 0;
  }

  .instagram-grid {
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(auto-fill, calc(100% / 8));

    &__image {
      min-height: 250px;
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      position: relative;
      transition: 0.2s;

      &:hover {
        &:after {
          background-image: radial-gradient(
            ellipse closest-side,
            rgba($color__radial-1, 0.2),
            $color__radial-2
          );
        }
      }

      &:after {
        content: "";
        background-image: radial-gradient(
          ellipse closest-side,
          rgba($color__radial-1, 0.75),
          $color__radial-2
        );
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 0.2s;
      }
    }

    &__link {
      color: inherit;
      text-decoration: none;
    }
  }

  .instagram-grid-error {
    grid-column: 1 / -1;
    justify-self: center;
  }

  .instagram-grid-loading {
    width: calc($spacing * 3);
    height: calc($spacing * 3);
    grid-column: 1 / -1;
    justify-self: center;
    align-self: center;
    background: $color__primary;
    animation: load $speed infinite ease-in-out;
    transform: rotate(0);
    border-radius: 4px;
  }

  @keyframes load{
    100% {
      transform: rotate(360deg);
    }
  }
</style>
