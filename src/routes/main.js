import { createRouter, createWebHistory } from "vue-router";

import SampleList from "../components/SampleList.vue";
import PollForm from "../components/PollForm.vue";

const routes = [
  {
    path: "/",
    component: SampleList,
  },
  {
    path: "/create",
    component: PollForm,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
