<template>
  <div class="tabs">
    <ul>
      <template v-for="(item, index) in items" :key="index">
        <li>
          <div
            @click="navigate(item.to)"
            :class="[item.to === activeItem ? 'active' : '']"
          >
            {{ item.name }}
          </div>
        </li>
      </template>
    </ul>
  </div>
  <!-- :class="[item === activeItem ? 'active' : '']" -->
  <!-- on:click={() => dispatch('setActiveItem', i) -->
</template>

<script>
export default {
  props: ["items"],
  methods: {
    navigate(to) {
      this.$router.push(to);
    },
  },
  computed: {
    activeItem() {
      return this.$route.path ? this.$route.path : "";
    },
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
