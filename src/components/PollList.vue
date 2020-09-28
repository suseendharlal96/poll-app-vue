<template>
  <div class="poll-list">
    <!-- {{ JSON.stringify(polls, null, 4) }} -->
    <template v-if="polls && polls.length > 0">
      <div v-for="(item, index) in polls" :key="item._id">
        <PollDetail :poll="item" :index="index" />
      </div>
    </template>
    <template v-else-if="polls && polls.length === 0">
      <p>Create a new poll</p>
    </template>
    <template v-else>
      <p>Loading...</p>
    </template>
  </div>
</template>

<script>
import { onMounted, computed, inject } from "vue";

import axios from "axios";

import PollDetail from "./PollDetail.vue";

import { baseURL } from "../baseUrl";

export default {
  setup() {
    // injected from App.vue
    const store = inject("$store");

    const polls = computed(() => {
      // using store module concept
      return store.getters["polls/getPolls"];
    });
    onMounted(() => {
      // using store module concept
      store.dispatch("polls/getPolls");
    });

    return { polls };
  },
  components: {
    PollDetail,
  },
};
</script>

<style scoped>
.poll-list {
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  display: grid;
}
</style>
