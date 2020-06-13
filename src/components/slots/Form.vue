<template>
  <form-helper>
    <div slot="form-header">
      <h3>Form Header</h3>
      <p>Information about form</p>
    </div>
    <div slot="form-fields">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
    <div slot="form-controls">
      <button>Submit</button>
    </div>
  </form-helper>
</template>
<script>
import FormHelper from "./FormHelper";
export default {
  components: {
    "form-helper": FormHelper
  },
  data() {
    return {
      title: "i am a dynamic slot title"
    };
  }
};
</script>
