<template>
  <ul>
    <li v-for="(person,i) in persons" :key="i">
      <h2>{{ person.name }}</h2>
      <p>{{ person.speciality }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    persons: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
