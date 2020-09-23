<template>
  <div class="tabs">
    <ul>
      <template v-for="(item, index) in items" :key="item">
        <li>
          <div
            @click="this.$emit('setActiveItem', index)"
            :class="[item === activeItem ? 'active' : '']"
          >
            {{ item }}
          </div>
        </li>
      </template>
    </ul>
  </div>
  <!-- on:click={() => dispatch('setActiveItem', i) -->
</template>

<script>
export default {
  props: ["items", "activeItem"],
  methods: {
    // setActiveItem(index) {
    //   console.log(index);
    //   this.$emit("setActiveItem", index);
    // },
  },
};
</script>

<style scoped>
.active {
  color: royalblue;
  border-bottom: 2px solid royalblue;
  padding-bottom: 8px;
}
ul {
  display: flex;
  justify-content: center;
  padding: 0;
  list-style-type: none;
}
.tabs {
  margin-bottom: 40px;
}
li {
  margin: 0 20px;
  cursor: pointer;
}
</style>
