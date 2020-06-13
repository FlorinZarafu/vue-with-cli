<template>
  <div>
    <comp-one :title="title" @changeTitle="updateTitle($event)"></comp-one>
    <comp-two :title="title"></comp-two>
  </div>
</template>
<script>
import EventOne from "./ChildEventOne";
import EventTwo from "./ChildEventTwo";
export default {
  components: {
    "comp-one": EventOne,
    "comp-two": EventTwo
  },
  data() {
    return {
      title: "Vue App Events"
    };
  },
  methods: {
    updateTitle: function(updatedTitl) {
      this.title = updatedTitl;
    }
  }
};
</script>
