import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const pollsModule = {
  state: () => ({
    polls: null,
  }),
  getters,
  mutations,
  actions,
};

export default pollsModule;
