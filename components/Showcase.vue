<!-- Please remove this file from your project -->
<template>
  <div>
    <ProductFilter />
    <section class="products">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
        @click="detail(product.name, product.id)"
      >
        <div class="product-image">
          <img v-lazy-load :src="product.image_link" />
        </div>
        <div class="product-info">
          <h5>{{ product.name }}</h5>
        </div>
        <h3>${{ product.price }}</h3>
      </div>
    </section>
  </div>
</template>

<script>
import ProductFilter from '~/components/ProductFilter'
export default {
  components: {
    ProductFilter
  },
  props: {
    products: {
      type: Array,
      default: [],
    },
  },
  methods: {
    detail (val, val2) {
      this.$router.push({
        path: '/detail',
        query: { qp: `${val}-${val2}` } 
      })
    }
  }
};
</script>