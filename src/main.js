import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VueResource from "vue-resource";

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-stock-trader-a428b.firebaseio.com/";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
