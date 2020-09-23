<template>
  <main>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Navbar
      :items="items"
      :activeItem="activeItem"
      @setActiveItem="activeItem = items[$event]"
    />
    <template v-if="activeItem === items[0]">
      <poll-list
        :polls="polls"
        @deletemypoll="polls.splice($event, 1)"
        @castVote="castVote($event)"
      />
    </template>
    <template v-else>
      <poll-form @addNewPoll="addNewPoll($event)"></poll-form>
    </template>
  </main>
</template>

<script>
import axios from "axios";
import Navbar from "./components/shared/Navbar.vue";
import PollList from "./components/PollList.vue";
import PollForm from "./components/PollForm.vue";
import { baseURL } from "./baseUrl";

export default {
  data() {
    return {
      polls: null,
      items: ["Current Polls", "Add New Poll"],
      activeItem: "",
    };
  },
  methods: {
    castVote(data) {
      console.log(data);
      const pollsCopy = [...this.polls];
      const pollIndex = pollsCopy.findIndex((p) => p._id === data.id);
      if (data.option === "A") {
        pollsCopy[pollIndex].voteA++;
      } else {
        pollsCopy[pollIndex].voteB++;
      }
      this.polls = pollsCopy;
      // this.activeItem = this.items[index];
    },
    addNewPoll(data) {
      this.polls.unshift(data);
      this.activeItem = this.items[0];
    },
  },
  components: {
    PollList,
    PollForm,
    Navbar,
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
