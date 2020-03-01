<template>
  <div class="container">
    <div class="row">
      <Stock
        v-for="(stock, index) in stocks"
        :key="index"
        :stock="stock"
      ></Stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  components: { Stock },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style>
.container {
  padding: 0;
  margin-top: 40px;
}
</style>
