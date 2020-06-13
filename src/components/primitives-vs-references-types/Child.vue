<template>
  <div>
    <ul>
      <li v-for="(arr,index) in arra" :key="index">{{ arr }}</li>
    </ul>
    <button @click="deleteNum">Delete</button>
  </div>
</template>
<script>
export default {
  props: {
    arra: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    deleteNum: function() {
      this.arra.pop();
    }
  }
};
</script>
