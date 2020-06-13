<template>
  <h1>{{ title }}</h1>
</template>
<script>
import { bus } from "../../main";
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  created() {
    bus.$on("titleChanged", data => {
      this.title = data;
    });
  }
};
</script>
