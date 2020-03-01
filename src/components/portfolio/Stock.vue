<template>
  <div class="col-sm-6 col-md-4">
    <div class="card text-white bg-info mb-3">
      <div class="card-body">
        <h5 class="card-title text-left">{{ stock.name }}</h5>
        <h6 class="card-subtitle mb-2 text-left">
          (Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}
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
            @click="sellStock"
            :disabled="
              insufficientQuantity ||
                quantity <= 0 ||
                !Number.isInteger(+quantity)
            "
          >
            {{ insufficientQuantity ? "Not Enough Stocks" : "Sell" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
