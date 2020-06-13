<template>
  <div>
    <h3>List of Persons</h3>
    <ul>
      <li v-for="(person,i) in persons" :key="i">{{ person }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: ["Person One", "Person Two"]
    };
  }
};
</script>

<!-- add scoped in style tag for the styles to be applied only to this component-->
<style scoped>
h3 {
  color: green;
}
</style>
