<template>
  <div id="content">
    <div class="content-wrap">
      <section class="section is-medium">
        <div class="container">
          <h1 class="title is-1">
            Portfolio
          </h1>

          <div class="content is-medium">
            <p>This my showcase on featured work.</p>
          </div>

          <div class="portfolio">
            <article
              v-for="(items, index) in portfolio"
              :key="index"
              class="portfolio__item"
            >
              <div class="portfolio__header">
                <div class="porfolio__image">
                  <img
                    :src="items.fields.portfolioImage.fields.file.url + '??fit=fill&w=320&h=240'"
                    :alt="items.fields.title"
                  >
                </div>
                <h2 class="portfolio__title title is-2">
                  <nuxt-link
                    :to="'/work/' + items.fields.slug"
                    class="portfolio__link"
                  >
                    {{ items.fields.title }}
                  </nuxt-link>
                </h2>
              </div>
              <div class="portfolio__content content is-medium">
                {{ items.fields.description }}
              </div>
              <div class="portfolio__footer">
                <nuxt-link
                  :to="'/work/' + items.fields.slug"
                  class="portfolio__read-more button is-large"
                >
                  See
                </nuxt-link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import client from '~/plugins/contentful.js'

  export default {
    head () {
      return {
        title: 'Work',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Latest featured work.'
          }
        ]
      }
    },

    asyncData({ env }) {
      return Promise.all([
        client.getEntries({
          include: 10,
          content_type: 'portfolio',
          order: '-sys.createdAt'
        })
      ]).then(([entries]) => {
        return {
          portfolio: entries.items
        }
      }).catch(console.error)
    }
  }
</script>

<style lang="scss">
  .articles {
    &__item {
      margin-bottom: 50px;
    }
  }
</style>
