<template>
  <div class="persons">
    <child-component :persons="persons"></child-component>
  </div>
</template>
<script>
import Child from "./Child";
export default {
  components: {
    "child-component": Child
  },
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
</style>
