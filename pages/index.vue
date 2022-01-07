<template>
  <Showcase :products="getProducts" />
</template>

<script>
import Showcase from "~/components/Showcase";
export default {
  name: "evermos-catalogue-index",
  layout: "showcase",
  components: {
    Showcase,
  },
  created() {
    this.$store.dispatch("fetchProduct");
  },
  computed: {
    getProducts() {
      return this.$store.getters["getProducts"];
    },
  },
  head () {
    return {
      title: 'Evermos - Product List'
    }
  },
};
</script>
