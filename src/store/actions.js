export default {
  login({ commit }) {
    // perform login logic here
    localStorage.setItem("SET_AUTHENTICATED", true);
    commit("SET_AUTHENTICATED", true);
  },
  logout({ commit }) {
    // Perform the logout logic here, and then commit the mutation to update the state
    localStorage.removeItem("SET_AUTHENTICATED");
    commit("SET_AUTHENTICATED", false);
  },
  // other actions
  tryLogin({ commit }) {
    const loginStatus = localStorage.getItem("SET_AUTHENTICATED");
    if (loginStatus) {
      commit("SET_AUTHENTICATED", loginStatus);
    }
  },
};
