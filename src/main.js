import Vue from "vue";
import App from "./App.vue";
import bToast from "./index";
import "./assets/global.scss";

Vue.config.productionTip = false;
Vue.use(bToast, {
  isDark: true,
});

new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
