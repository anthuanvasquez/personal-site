<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <p class="subtitle is-6">
            <nuxt-link to="/life">Back to Posts</nuxt-link>
          </p>
          <h1 class="title is-2">
            {{ post.fields.title }}
          </h1>
          <div
            class="content is-medium"
            v-html="$md.render(post.fields.body)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  asyncData({ params, error, payload }) {
    if (payload) {
      return {
        post: payload
      };
    }

    return client.getEntries({
      content_type: 'blogPost',
        'fields.slug': params.slug,
      })
      .then(entries => {
        return {
          post: entries.items[0]
        };
      })
      .catch(e => console.log(e));
  },

  head() {
    return {
      title: this.post.fields.title,
    };
  },
};
</script>
