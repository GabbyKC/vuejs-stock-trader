<template>
  <section class="container">
    <div class="row">
      <appStock
        v-for="(stock, index) in stocks"
        :stock="stock"
        :key="index"
      ></appStock>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock: Stock
  }
};
</script>
