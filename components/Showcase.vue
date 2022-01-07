<!-- Please remove this file from your project -->
<template>
  <div>
    <div style="display: flex; justify-content: end; padding: 10px">
      <ProductFilter />
    </div>
    <section v-if="products.length" class="products">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
        @click="detail(product.name, product.id)"
      >
        <div class="product-image">
          <div class="fulltitle">
            {{ product.name }}
          </div>
          <img v-lazy-load :src="product.image_link" />
        </div>
        <div class="product-info">
          <h5>{{ product.name }}</h5>
        </div>
        <h3>${{ product.price }}</h3>
      </div>
    </section>
    <div class="container-elipsis" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import ProductFilter from "~/components/ProductFilter";
import Spinner from "~/components/loading";
export default {
  components: {
    ProductFilter,
    Spinner,
  },
  props: {
    products: {
      type: Array,
      default: [],
    },
  },
  methods: {
    detail(val, val2) {
      this.$router.push({
        path: "/detail",
        query: { qp: `${val}-${val2}` },
      });
    },
  },
};
</script>