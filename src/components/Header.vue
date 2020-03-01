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
        <li class="nav-item"><a href="#" class="nav-link">End Day</a></li>
        <li class="nav-item dropdown">
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
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
      <strong class="nav-link">Funds: {{ funds }}</strong>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
