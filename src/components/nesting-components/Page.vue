<template>
  <div>
    <header-component></header-component>
    <body-component></body-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
export default {
  components: {
    "header-component": Header,
    "body-component": Body,
    "footer-component": Footer
  }
};
</script>
