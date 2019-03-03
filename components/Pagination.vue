<template>
  <nav id="pagination">
    <ul
      class="page-numbers"
      v-if="$store.state.totalPageCount"
    >
      <li
        v-for="(num, index) in this.pageNumbers"
        :key="index"
        :style="{ width: (100 / pageNumberCount) + '%' }"
      >
        <nuxt-link
          v-if="num != $route.query.page && num != currentPage"
          :to="{ path: '/', query: { page: num } }"
        >
          {{ num }}
        </nuxt-link>
        <span v-else>
          {{ num }}
        </span>
      </li>
    </ul>

    <ul
      class="page-guides"
      v-if="this.$store.state.totalPageCount != 1"
    >
      <li>
        <nuxt-link
          v-if="$route.query.page != 1 && $route.query.page"
          :to="{ path: '/', query: { page: 1 }}"
        >
          最初
        </nuxt-link>
        <span v-else>
          最初
        </span>
      </li>
      <li>
        <nuxt-link
          v-if="this.prevpage != null"
          :to="{ path: '/', query: { page: this.prevpage }}"
        >
          &laquo; 前へ
        </nuxt-link>
        <span v-else>
          &laquo; 前へ
        </span>
      </li>
      <li>
        <nuxt-link
          v-if="this.nextpage != null && $route.query.page != $store.state.totalPageCount"
          :to="{ path: '/', query: { page: this.nextpage }}"
        >
          次へ &raquo;
        </nuxt-link>
        <span v-else>
          次へ &raquo;
        </span>
      </li>
      <li>
        <nuxt-link
          v-if="$route.query.page != $store.state.totalPageCount"
          :to="{ path: '/', query: { page: $store.state.totalPageCount }}"
        >
          最後
        </nuxt-link>
        <span v-else>
          最後
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        prevpage: null,
        nextpage: null,
        currentPage: null,
        pageNumbers: [],
        pageNumberCount: 0
      }
    },

    mounted () {
      this.setPageNumbers()
    },

    methods: {
      setPages (currentPage, totalPageCount) {
        this.prevpage = currentPage > 1 ? (currentPage - 1) : null
        if (!totalPageCount) {
          this.nextpage = this.$route.query.page ? (parseInt(this.$route.query.page) + 1) : 2
        }
        else {
          this.nextpage = currentPage < totalPageCount ? (parseInt(currentPage) + 1) : null
        }

        for (let i = 0; i < 7; i++) {
          let _p = ((parseInt(currentPage) - 4) + i)

          if (_p > 0 && _p <= totalPageCount) {
            this.pageNumbers.push(_p)
            this.pageNumberCount++
          }
          else {
            this.pageNumbers.push(null)
          }
        }
      },

      setPageNumbers () {
        let _currentPage = this.$route.query.page ? this.$route.query.page : 1
        this.currentPage = _currentPage
        this.setPages(_currentPage, this.$store.state.totalPageCount)
      }
    }
  }
</script>
