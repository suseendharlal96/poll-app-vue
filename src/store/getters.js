const getters = {
// POLLS
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
  // REGISTRATION
  getUnregisteredUsers: (state) =>
    state.users.filter((u) => u.registered === false),
  getRegistrations: (state) => state.registrations,
  getTotalRegistrations: (state) => state.registrations.length,
};

export default getters;
