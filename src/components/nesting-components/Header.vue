<template>
  <header>
    <h3>{{ title }}</h3>
  </header>
</template>
<script>
export default {
  data() {
    return {
      title: "Vue header component"
    };
  }
};
</script>
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h3 {
  color: #222;
  text-align: center;
}
</style>
