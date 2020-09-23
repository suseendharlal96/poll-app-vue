<template>
  <button :class="[type, flat ? 'flat' : '']">
    <slot />
  </button>
</template>

<script>
export default {
  props: ["type", "flat"],
};
</script>

<style scoped>
button {
  border: 0;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
}
.primary {
  color: #fff;
  background-color: royalblue;
}
.secondary {
  color: #fff;
  background-color: red;
}
.flat {
  box-shadow: 10px 20px 3px rgba(0, 0, 0, 0.3);
}
</style>
