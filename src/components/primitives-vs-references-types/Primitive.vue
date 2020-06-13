<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="deleteTitle">Delete Title</button>
  </div>
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
    deleteTitle: function() {}
  }
};
</script>
