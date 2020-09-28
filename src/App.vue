<template>
  <main>
    <Navbar :items="items" />
    <!-- router with transiion effect -->
    <router-view v-slot="slotProps">
      <transition name="slide-left">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
    <!-- router with transiion effect -->
  </main>
</template>

<script>
import { provide, reactive } from "vue";

import Navbar from "./components/shared/Navbar.vue";
import PollList from "./components/PollList.vue";
import PollForm from "./components/PollForm.vue";
import Registration from "./components/Registration.vue";
import Registrations from "./components/Registrations.vue";

import { baseURL } from "./baseUrl";
import { store } from "./store/store";
import { router } from "./routes/main";

export default {
  setup() {
    provide("$store", store);
    provide("$router", router);
    const items = reactive([
      { name: "Current Polls", to: "/polls" },
      { name: "Add New Poll", to: "/create" },
    ]);
    return {
      items,
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
