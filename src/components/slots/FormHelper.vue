<template>
  <div>
    <h1>Please fill the form...</h1>
    <form>
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="links">
        <ul>
          <li>
            <a href>link 1</a>
          </li>
          <li>
            <a href>link 2</a>
          </li>
          <li>
            <a href>link 3</a>
          </li>
          <li>
            <a href>link 4</a>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
