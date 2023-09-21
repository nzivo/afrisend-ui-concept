import { createStore } from "vuex";

const store = new createStore({
  state: {
    user: {
      authenticated: false,
      // other user-related state properties
    },
    // other state properties
  },
  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.user.authenticated = value;
    },
    // other mutations
  },
  actions: {
    login({ commit }) {
      // perform login logic here
      commit("SET_AUTHENTICATED", true);
    },
    logout({ commit }) {
      // Perform the logout logic here, and then commit the mutation to update the state
      commit("SET_AUTHENTICATED", false);
    },
    // other actions
  },
  getters: {
    isAuthenticated(state) {
      return state.user.authenticated;
    },
    // You can define other getters here as needed
  },
  // other modules, if applicable
});

export default store;
