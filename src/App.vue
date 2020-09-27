<template>
  <main>
    <Navbar :items="items" />
    <!-- <template v-if="activeItem === items[0]">
      <poll-list />
    </template>
    <template v-else>
      <poll-form @addNewPoll="activeItem = items[0]"></poll-form>
    </template> -->
    <router-view v-slot="slotProps">
      <transition name="slide-left">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
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
      items: [
        { name: "Current Polls", to: "/polls" },
        { name: "Add New Poll", to: "/create" },
      ],
    };
  },
  components: {
    PollList,
    PollForm,
    Navbar,
  },
};
</script>

<style scoped>
main {
  max-width: 960px;
  margin: 40px auto;
}
</style>
