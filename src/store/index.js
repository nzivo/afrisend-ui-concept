import { createStore } from "vuex";

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const store = new createStore({
  state: {
    user: {
      authenticated: false,
      // other user-related state properties
    },
    // other state properties
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
  // other modules, if applicable
});

export default store;
