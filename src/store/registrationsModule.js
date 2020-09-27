import getters from "./getters";
import mutations from "./mutations";

const registrationsModule = {
  state: () => ({
    registrations: [],
    users: [
      { id: 1, name: "John", registered: false },
      { id: 2, name: "Louis", registered: false },
      { id: 3, name: "Mike", registered: false },
      { id: 4, name: "Jim", registered: false },
    ],
  }),
  getters,
  mutations,
};

export default registrationsModule;
