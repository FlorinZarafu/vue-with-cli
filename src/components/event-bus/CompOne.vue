<template>
  <h1 @click="changeTitle">{{ title }}</h1>
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
  methods: {
    changeTitle: function() {
      this.title = "new title";
      bus.$emit("titleChanged", "new title");
    }
  }
};
</script>
