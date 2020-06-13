<template>
  <div>
    <CompOne :title="title" />
    <CompTwo :title="title" />
  </div>
</template>
<script>
import CompOne from "./CompOne";
import CompTwo from "./CompTwo";
export default {
  components: {
    CompOne,
    CompTwo
  },
  data() {
    return {
      title: "vue app"
    };
  }
};
</script>
