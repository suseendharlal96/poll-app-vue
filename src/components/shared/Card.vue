<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
