import { createRouter, createWebHistory } from "vue-router";

import PollList from "../components/PollList.vue";
import PollForm from "../components/PollForm.vue";

const routes = [
  {
    path: "/polls",
    component: PollList,
    children: [
      {
        path: "/polls/:id/delete",
        component: PollList,
      },
    ],
  },
  {
    path: "/create",
    component: PollForm,
  },
  {
    // new in vue3 for 404 routes
    path: "/:pathMatch(.*)*",
    redirect: "/polls",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
