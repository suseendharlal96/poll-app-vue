import axios from "axios";

import { baseURL } from "../baseUrl";

const actions = {
  // POLLS
  getPolls: async ({ commit }) => {
    const res = await axios.get(baseURL);
    commit("getPolls", { polls: res.data.polls });
  },
  createPoll: async ({ commit }, { poll }) => {
    const res = await axios.post(`${baseURL}/create`, poll);
    commit("createPoll", { poll: res.data.poll });
  },
  deletePoll: async ({ commit }, { id }) => {
    console.log(id);
    await axios({
      method: "delete",
      url: `${baseURL}/delete`,
      data: { id },
    });
    commit("deletePoll", id);
  },
  castVote: async ({ commit }, { id, option }) => {
    const res = await axios.patch(`${baseURL}/update`, {
      id,
      voteFor: option,
    });
    commit("castVote", { id, option });
  },
};

export default actions;
