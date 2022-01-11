<template>
  <nav class="header-nav">
    <div class="logo">
      <img width="70px" height="70px" src="https://scontent-cgk1-1.xx.fbcdn.net/v/t39.30808-6/240213788_899490397356262_1783322661913117814_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE8oBY9Nykl99IiFJwRXE8-r1p8z_1jZ5SvWnzP_WNnlL-VY7vQBa3vFkVyUJDpYuo&_nc_ohc=aXuaCXYaOoEAX-cnhYd&_nc_ht=scontent-cgk1-1.xx&oh=00_AT_iKz15rWthxRU_rZsYfUanUuIuTg1oyEV5BFmkx03IsQ&oe=61DC5EC1" alt="">
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
export default {
  data () {
    return {
      search: ''
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