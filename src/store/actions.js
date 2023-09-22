export default {
  login({ commit }) {
    // perform login logic here
    commit("SET_AUTHENTICATED", true);
  },
  logout({ commit }) {
    // Perform the logout logic here, and then commit the mutation to update the state
    commit("SET_AUTHENTICATED", false);
  },
  // other actions
};
