<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <router-link
          to="/portfolio"
          active-class="active"
          class="nav-item"
          tag="li"
          ><a class="nav-link">Portfolio</a></router-link
        >
        <router-link
          to="/stocks"
          active-class="active"
          class="nav-item"
          tag="li"
          ><a class="nav-link">Stocks</a></router-link
        >
        <li class="nav-item">
          <a href="#" class="nav-link" @click="endDay">End Day</a>
        </li>
        <li
          class="nav-item dropdown"
          :class="{ show: isDropdownOpen }"
          @click="isDropdownOpen = !isDropdownOpen"
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div
            class="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
            :class="{ show: isDropdownOpen }"
          >
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
      </ul>
      <strong class="nav-link">Funds: {{ funds | currency }}</strong>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>
