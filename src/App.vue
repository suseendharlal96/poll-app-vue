<template>
  <main>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <hello-world msg="Hello !" /> -->
    <template v-if="polls.length > 0">
      <poll-list :polls="polls" />
    </template>
  </main>
</template>

<script>
import axios from "axios";
import PollList from "./components/PollList.vue";
import { baseURL } from "./baseUrl";

export default {
  data() {
    return {
      polls: [],
      items: ["Current Polls", "Add New Poll"],
      activeItem: null,
    };
  },
  components: {
    PollList,
  },
  async mounted() {
    const res = await axios.get(baseURL);
    this.polls = res.data.polls;
    console.log(res.data.polls);
  },
  created() {
    this.activeItem = this.items[0];
  },
};
</script>

<style scoped>
main {
  max-width: 960px;
  margin: 40px auto;
}
</style>
