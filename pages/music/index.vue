<template>
  <div id="content">
    <div class="content-wrap">
      <section class="section is-medium">
        <div class="container">
          <div class="content is-medium has-text-centered">
            <p>
              I'm also a beat-maker and producer working under the alias Oido Perfecto mixing elements of ambient, electronic, jazz, lo-fi, and hip-hop music genres.
            </p>
            <div class="social-links">
              <a href="">SoundCloud</a>
              <a href="">Sportify</a>
              <a href="">iTunes</a>
              <a href="">Facebook</a>
              <a href="">YouTube</a>
            </div>
          </div>
          <div class="albumn">
            <div class="albumn__item">
              <div class="albumn__cover">
                <img
                  src="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/72/f5/fe/72f5fe33-1420-0538-58d6-755b9e92fb1f/5057728004594_cover.jpg/626x0w.jpg"
                  alt=""
                >
              </div>
              <div class="albumn__content">
                <span class="tag is-primary is-medium">
                  New
                </span>
                <h3 class="title is-3">
                  Perfect Beats II
                </h3>
                <p>Oct 16, 2017 . 19 Tracks Album . 1h 8min</p>
                <p>
                  Perfect Beats II is a reflection on anxiety, depression, and relationships in my life wrapped in a mix of different styles and moods on 6 tracks. My first full album release as Oido Perfecto.
                </p>
                <p>Places to Listen "Perfect Beats"</p>
              </div>
            </div>
            <div class="albumn__item">
              <div class="albumn__cover">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/99/2e/da/992eda68-7953-0378-2808-09318b0843f8/5057302489069_cover.jpg/626x0w.jpg"
                  alt=""
                >
              </div>
              <div class="albumn__content">
                <h3 class="title is-3">
                  Perfect Beats
                </h3>
                <p class="albumn__meta">
                  <span class="albumn__date">Oct 16, 2017</span> . <span class="albumn__tracks">19 Tracks Album</span> . <span class="albumn__time">1h 8min</span>
                </p>
                <p class="albumn__description">
                  Perfect Beats is a reflection on anxiety, depression, and relationships in my life wrapped in a mix of different styles and moods on 6 tracks. My first full album release as Oido Perfecto.
                </p>
                <p class="albumn__store">
                  Places to Listen "Perfect Beats"
                </p>
                <ul class="albumn__stores-list">
                  <li class="albumn__stores-item">
                    <a
                      class="albumn__stores-link"
                      href=""
                    >
                      Spotify
                    </a>
                  </li>
                  <li class="albumn__stores-item">
                    <a
                      class="albumn__stores-link"
                      href=""
                    >
                      Amazon
                    </a>
                  </li>
                  <li class="albumn__stores-item">
                    <a
                      class="albumn__stores-link"
                      href=""
                    >
                      iTunes
                    </a>
                  </li>
                  <li class="albumn__stores-item">
                    <a
                      class="albumn__stores-link"
                      href=""
                    >
                      Shazam
                    </a>
                  </li>
                  <li class="albumn__stores-item">
                    <a
                      class="albumn__stores-link"
                      href=""
                    >
                      SoundCloud
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Music',
        meta: [
          { hid: 'description', name: 'description', content: 'Latest Beats' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .albumn {
    &__item {
      display: flex;
      margin-bottom: 50px;
    }

    &__cover {
      margin-right: 30px;
    }
  }
</style>

