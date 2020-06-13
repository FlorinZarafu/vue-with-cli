<template>
  <div>
    <child-component :arra="arr"></child-component>
    <primitive-component :title="title"></primitive-component>
  </div>
</template>
<script>
import Child from "./Child";
import Primitive from "./Primitive";
export default {
  components: {
    "child-component": Child,
    "primitive-component": Primitive
  },
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7],
      title: "Primitive type"
    };
  }
};
</script>
