<template>
  <div class="col-sm-6 col-md-4">
    <div class="card bg-light mb-3">
      <div class="card-body">
        <h5 class="card-title text-left">{{ stock.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted text-left">
          (Price: {{ stock.price }})
        </h6>
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="
              insufficientFunds || quantity <= 0 || !Number.isInteger(+quantity)
            "
          >
            {{ insufficientFunds ? "Insufficient Funds" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
.float-left {
  width: 30%;
}
</style>
