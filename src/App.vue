<template>
  <main>
    <Navbar
      :items="items"
      :activeItem="activeItem"
      @setActiveItem="activeItem = items[$event]"
    />
    <template v-if="activeItem === items[0]">
      <poll-list />
    </template>
    <template v-else>
      <poll-form @addNewPoll="activeItem = items[0]"></poll-form>
    </template>
  </main>
</template>

<script>
import Navbar from "./components/shared/Navbar.vue";
import PollList from "./components/PollList.vue";
import PollForm from "./components/PollForm.vue";
import Registration from "./components/Registration.vue";
import Registrations from "./components/Registrations.vue";
import { baseURL } from "./baseUrl";

export default {
  data() {
    return {
      items: ["Current Polls", "Add New Poll"],
      activeItem: "",
    };
  },
  components: {
    PollList,
    PollForm,
    Navbar,
  },
  mounted() {
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
