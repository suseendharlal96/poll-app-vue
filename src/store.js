import { createStore } from "vuex";
import axios from "axios";

import { baseURL } from "./baseUrl";

export const store = createStore({
  state: {
    registrations: [],
    users: [
      { id: 1, name: "Max", registered: false },
      { id: 2, name: "Anna", registered: false },
      { id: 3, name: "Chris", registered: false },
      { id: 4, name: "Sven", registered: false },
    ],
    polls: null,
  },
  getters: {
    getPolls: (state) => state.polls,
    getUnregisteredUsers: (state) =>
      state.users.filter((u) => u.registered === false),
    getRegistrations: (state) => state.registrations,
    getTotalRegistrations: (state) => state.registrations.length,
    getTotal: (state) => ({ pollId }) => {
      const individualPoll = state.polls
        ? state.polls.find((p) => p._id == pollId)
        : "";
      const { voteA, voteB } = individualPoll;
      return voteA + voteB;
    },
    getPercentA: (state) => ({ pollId }) => {
      const individualPoll = state.polls
        ? state.polls.find((p) => p._id == pollId)
        : "";
      const { voteA, voteB } = individualPoll;
      return (voteA / (voteA + voteB)) * 100;
    },
    getPercentB: (state) => ({ pollId }) => {
      const individualPoll = state.polls
        ? state.polls.find((p) => p._id == pollId)
        : "";
      const { voteA, voteB } = individualPoll;
      return (voteB / (voteA + voteB)) * 100;
    },
  },
  mutations: {
    register: (state, { userId }) => {
      const user = state.users.find((u) => u.id === userId);
      user.registered = true;
      const date = new Date();
      state.registrations.push({
        userId: user.id,
        name: user.name,
        date: date.getMonth() + 1 + "/" + date.getFullYear(),
      });
    },
    unregister: (state, { userId }) => {
      const user = state.users.find((u) => u.id === userId);
      user.registered = false;
      const registeredUser = state.registrations.find(
        (u) => u.userId === userId
      );
      state.registrations.splice(
        state.registrations.indexOf(registeredUser),
        1
      );
    },
    getPolls: (state, { polls }) => {
      state.polls = polls;
    },
    createPoll: (state, { poll }) => {
      state.polls.unshift(poll);
    },
    deletePoll: (state, id) => {
      state.polls = state.polls.filter((p) => p._id !== id);
    },
    castVote: (state, { id, option }) => {
      const poll = state.polls ? state.polls.find((p) => p._id === id) : null;
      if (option === "A") {
        poll.voteA++;
      } else {
        poll.voteB++;
      }
    },
  },
  actions: {
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
  },
});
