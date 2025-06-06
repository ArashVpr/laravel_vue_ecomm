// Importing Vuex to create the central storage room for the application.
import { createStore } from 'vuex';
// Importing ALL actions that handle complex tasks.
import * as actions from './actions'; 
// Importing ALL mutations that directly modify the state.
import * as mutations from './mutations'; 

// Setting up the Vuex store, which acts as the central storage room for shared data.
const store = createStore({
  state: {
    // The "state" is like the pantry in the kitchen where all the raw ingredients (data) are stored.
    user: {
      // The "token" is like the security badge that allows the user to access restricted areas (authenticated API endpoints).
      token: sessionStorage.getItem('TOKEN'),
      // The "data" is like the user's profile information stored in the pantry for easy access.
      data: {},
    }
  },
  // The "getters" are like the recipe book that explains how to use the ingredients (state) to prepare dishes (computed data).
  getters: {},
  // The "mutations" are like the chefs who are authorized to directly modify the ingredients (state) in the pantry.
  mutations,
  // The "actions" are like the waiters who take orders from customers (components) and coordinate with the chefs (mutations) to update the pantry (state).
  actions,
})

// Exporting the Vuex store so it can be used throughout the application as the central storage room.
export default store;
