import Vue from "vue";
import App from "./App.vue";

// import nested component globally
/**
import NestedComp from "./components/1-NestedComponent.vue";
Vue.component("persons", NestedComp);
*/

export const bus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
