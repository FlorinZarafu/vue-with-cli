<template>
  <div class="persons">
    <ul>
      <li v-for="(person,i) in persons" :key="i" @click="person.show = !person.show">
        <h2>{{ person.name }}</h2>
        <p v-show="person.show">{{ person.speciality }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      persons: [
        { name: "Person One", speciality: "PHP", show: false },
        { name: "Person Two", speciality: "Vue", show: false },
        { name: "Person Three", speciality: "Laravel", show: false },
        { name: "Person Four", speciality: "React", show: false },
        { name: "Person Five", speciality: "Design", show: false }
      ]
    };
  }
};
</script>
<style scoped>
.persons {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
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
