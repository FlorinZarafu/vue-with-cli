<template>
  <div>
    <h3>{{ title }}</h3>
    <hr />
    <!-- nested component -->
    <persons></persons>
    <!-- scoped css -->
    <hr />
    <scoped-css></scoped-css>
    <hr />
    <page-component></page-component>
    <hr />
    <props-component></props-component>
    <hr />
    <reference-primitive></reference-primitive>
    <hr />
    <event-comp></event-comp>
    <hr />
    <ParentComp />
    <hr />
    <!-- <life-cycle></life-cycle> -->
    <form-comp></form-comp>
  </div>
</template>

<script>
// import components locally
import NestedComp from "./components/1-NestedComponent";
import ScopedCSS from "./components/2-ScopedCSS";
import WebPage from "./components/nesting-components/Page";
import Props from "./components/props/Parent";
import ParentRefPrim from "./components/primitives-vs-references-types/Parent";
import ParentEvent from "./components/events/EventParent";
import ParentComp from "./components/event-bus/ParentComp";
// import LifeCycle from "./components/life-cycle/LifeCycle";
import Form from "./components/slots/Form";
export default {
  // register components
  components: {
    persons: NestedComp,
    "scoped-css": ScopedCSS,
    "page-component": WebPage,
    "props-component": Props,
    "reference-primitive": ParentRefPrim,
    "event-comp": ParentEvent,
    "form-comp": Form,
    ParentComp
    // "life-cycle": LifeCycle
  },
  data() {
    return {
      title: "Vue App"
    };
  }
};
</script>

<!-- add scoped in style tag for the styles to be applied only to this component-->
<style scoped>
h3 {
  color: red;
}
</style>
