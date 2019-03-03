<template>
  <div id="content">
    <div class="content-wrap">
      <section class="section is-medium">
        <div class="container">
          <div class="columns">
            <main class="column is-12-tablet is-9-desktop articles">
              <h1 class="title is-1">
                Articles
              </h1>

              <div class="content is-medium">
                <p>C'mon in. Make yourself at home. Stay a while. Other things welcoming people say. Just starting out? Check out our beginner's guide.</p>
              </div>

              <article
                v-for="(post, index) in posts"
                :key="index"
                class="articles__item"
              >
                <figure class="articles__featured-image">
                  <img
                    :src="post.fields.heroImage.fields.file.url + '??fit=fill&w=200&h=200'"
                    :alt="post.fields.title"
                    class="articles__image"
                  >
                </figure>
                <div class="articles__content">
                  <h2 class="articles__title title is-2">
                    <nuxt-link
                      :to="'/life/' + post.fields.slug"
                      class="articles__link"
                    >
                      {{ post.fields.title }}
                    </nuxt-link>
                  </h2>
                  <div class="content is-medium">
                    {{ post.fields.description }}
                  </div>
                </div>
              </article>
            </main>

            <aside-component />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import AsideComponent from '~/components/AsideComponent'
  import client from '~/plugins/contentful.js'

  export default {
    components: {
      AsideComponent
    },

    head () {
      return {
        title: 'Life',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Latest blog posts related with my life and other work things.'
          }
        ]
      }
    },

    asyncData({ env }) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items
        }
      }).catch(console.error)
    }
  }
</script>

<style lang="scss">
  .articles {
    &__featured-image {
      margin-right: 20px;
      min-width: 200px
    }

    &__item {
      display: flex;
      margin-bottom: 50px;;
    }

    &__content {
      position: relative;
      overflow: hidden;
    }
  }

  .widget {
    background-color: transparent;

    .card-content {
      margin: 0 0 2rem 0;
      position: relative;
      padding: 0;

      &:before {
        content: "";
        background-image: linear-gradient(
          to top,
          $color__linear-1,
          $color__linear-2
        );
        position: absolute;
        top: -20px;
        right: -20px;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        padding-bottom: 1rem;
      }

      img {
        display: block;
        border-radius: 8px;
        box-shadow: 0 0 30px rgba(16,14,23,.25);
      }

      .content {
        padding: 1rem 1rem 2rem 2.5rem;
        position: relative;
        color: $color__font;
        white-space: normal;
        text-align: left;
        color: #C9CDEE;

        a {
          color: $color__font;
          font-weight: 700;
        }
      }
    }
  }
</style>
