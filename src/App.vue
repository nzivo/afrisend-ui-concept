<script>
import Navbar from "./components/Navigation/Navbar.vue";
import store from "./store/index.js";
export default {
  components: {
    Navbar,
  },
  created() {
    store.dispatch("tryLogin");
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style>
.underline-with-svg {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="5" viewBox="0 0 100 5"><path d="M0,2.5 C10,5 20,0 30,2.5 C40,5 50,0 60,2.5 C70,5 80,0 90,2.5 C100,5 110,0 120,2.5" fill="solid" stroke="%23000000" stroke-width="2" /></svg>');
  background-repeat: repeat-x;
  background-size: 10px 2px; /* Adjust the size as needed */
  background-position: bottom;
  text-decoration: none; /* Remove default underline */
  display: inline-block;
  padding-bottom: 2px; /* Adjust the padding to align with the SVG height */
}
</style>
