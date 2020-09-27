import { createStore } from "vuex";

import polls from "./pollsModule";
import registrations from "./registrationsModule";

export const store = createStore({
  modules: {
    polls: {
      ...polls,
      namespaced: true,
    },
    registrations: {
      ...registrations,
      namespaced: true,
    },
  },
});
