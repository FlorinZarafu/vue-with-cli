<template>
  <h1 @click="changeTitle">{{ title }}</h1>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    changeTitle: function() {
      this.$emit("changeTitle", "Vue title changed");
    }
  }
};
</script>
