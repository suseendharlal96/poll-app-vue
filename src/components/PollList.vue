<template>
  <div class="poll-list">
    <!-- {{ JSON.stringify(polls, null, 4) }} -->
    <template v-if="polls && polls.length > 0">
      <div v-for="(item, index) in polls" :key="item._id">
        <PollDetail :poll="item" :index="index" />
      </div>
    </template>
    <template v-else-if="polls && polls.length === 0">
      <p>Create a poll</p>
    </template>
    <template v-else>
      <p>Loading...</p>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import PollDetail from "./PollDetail.vue";
import { baseURL } from "../baseUrl";
export default {
  emits: ["deletemypoll", "castVote"],
  // data() {
  //   return {
  //     polls: null,
  //   };
  // },
  // props: ["polls"],
  components: {
    PollDetail,
  },
  computed: {
    polls() {
      return this.$store.getters.getPolls;
    },
  },
  mounted() {
    this.$store.dispatch("getPolls");
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
