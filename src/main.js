import Vue from "vue";
import App from "./App.vue";
import bToast from "./index";
import ClickOutside from "./components/clickOutside";
import "./assets/global.scss";
import VueFeather from "vue-feather";

Vue.use(VueFeather);

Vue.config.productionTip = false;
Vue.use(bToast, {
  isDark: true,
});
Vue.directive("click-outside", ClickOutside);
new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
