import { createRouter, createWebHistory } from "vue-router";

import PollList from "../components/PollList.vue";
const PollForm = () => import("../components/PollForm.vue");

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
   // new in vue3 for history mode
  history: createWebHistory(),
  routes,
});
