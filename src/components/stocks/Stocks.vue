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
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 110 },
        { id: 2, name: "Tesla", price: 210 },
        { id: 3, name: "Google", price: 90 },
        { id: 4, name: "Apple", price: 240 }
      ]
    };
  },
  components: { Stock }
};
</script>

<style scoped>
.container {
  padding: 0;
  margin-top: 40px;
}
</style>
