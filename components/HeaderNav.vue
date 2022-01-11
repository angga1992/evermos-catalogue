<template>
  <nav class="header-nav">
    <div class="logo">
      <img width="70px" height="70px" :src="logo" alt="">
    </div>
    <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          v-model="search"
          placeholder="What are you looking for?"
          @keydown.enter="searchProduct()"
        />
        <button type="submit" @click="searchProduct()" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import logoevermos from '~/assets/img/logo.jpg'
export default {
  data () {
    return {
      search: '',
      logo: logoevermos
    }
  },
  methods: {
    searchProduct () {
      this.$store.dispatch('clearShowcase')
      this.$store.dispatch('searchProduct', this.search)
    }
  }
}
</script>