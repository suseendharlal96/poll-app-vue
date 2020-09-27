const mutations = {
  // POLLS
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
  // REGISTRATIONS
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
    const registeredUser = state.registrations.find((u) => u.userId === userId);
    state.registrations.splice(state.registrations.indexOf(registeredUser), 1);
  },
};

export default mutations;
