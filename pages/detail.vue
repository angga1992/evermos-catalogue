<template>
  <div>
    <!-- <pre>{{id}}</pre>
        <pre>{{getDetail}}</pre>
        <div v-if="getDetail && getDetail.length > 0">
            <img v-lazy-load :src="getDetail[0].image_link" alt="">
        </div> -->
    <div v-if="getDetail && getDetail.length > 0" class="card-wrapper">
      <div class="card">
        <!-- card left -->
        <div class="product-imgs">
          <div class="img-display">
            <div class="img-showcase">
              <img img v-lazy-load :src="getDetail[0].image_link"  alt="shoe image" />
            </div>
          </div>
        </div>
        <!-- card right -->
        <div class="product-content">
          <h2 class="product-title">{{getDetail[0].name}}</h2>
          <a :href="getDetail[0].product_link" target="_blank" class="product-link">{{getDetail[0].brand}}</a>
          <div class="product-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div class="product-price">
            <p class="new-price">Price: <span>${{getDetail[0].price}}</span></p>
          </div>

          <div class="product-detail">
            <h2>about this item:</h2>
            <p>
              {{getDetail[0].description}}
            </p>
            <ul>
              <li style="display: flex">Color: <div>{{getDetail[0].product_colors[0].colour_name}}</div><div :style="{ marginLeft: '4px', width: '16px', height: '16px', backgroundColor: getDetail[0].product_colors[0].hex_value}"></div></li>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>{{getDetail[0].category !== null ? getDetail[0].category : ''}}</span></li>
              <!-- <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li> -->
            </ul>
          </div>

          <div class="purchase-info">
            <input type="number" min="0" value="1" />
            <button type="button" class="btn">
              Add to Cart <i class="fas fa-shopping-cart"></i>
            </button>
          </div>

          <div class="social-links">
            <p>Share At:</p>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="#">
              <i class="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
//   layout: 'showcase',
  data() {
    return {
      id: null,
    };
  },
  async mounted() {
    console.log(this.$route.query.qp);
    let temp = this.$route.query.qp;
    this.id = temp.split("-").pop();
    await this.$store.dispatch("fetchDetailProduct", this.id);
  },
  computed: {
    getDetail() {
      return this.$store.getters["getDetailProduct"];
    },
  },
};
</script>