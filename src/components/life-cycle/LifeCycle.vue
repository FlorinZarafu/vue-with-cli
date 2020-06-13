<template>
  <ul>
    <li v-for="(item,i) in arr" :key="i">{{ item }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  beforeCreate() {
    alert("before create");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("before mount");
  },
  mounted() {
    alert("mounted");
  },
  beforeUpdate() {
    alert("before updated");
  },
  updated() {
    alert("updated");
  },
  beforeDestroy() {
    alert("before destroy");
  },
  destroyed() {
    alert("destroyed");
  }
};
</script>
