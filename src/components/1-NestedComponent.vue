<template>
  <ul>
    <!-- looping trough array array from data -->
    <li v-for="(person,i) in persons" :key="i" v-text="person"></li>
    <!-- another way -->
    <!-- <li v-for="(person,i) in persons" :key="i">{{ person }}</li> -->
  </ul>
</template>

<script>
export default {
  data() {
    return {
      // persons array data
      persons: ["Person One", "Person Two", "Person Three", "Person Four"]
    };
  }
};
</script>

<style>
</style>
