// Importing Vuex to create the central storage room for the application.
import { createStore } from 'vuex';
// Importing state, which is like the pantry where all the ingredients (data) are stored.
import state from './state';
// Importing ALL actions that handle complex tasks.
import * as actions from './actions'; 
// Importing ALL mutations that directly modify the state.
import * as mutations from './mutations'; 

// Setting up the Vuex store, which acts as the central storage room for shared data.
const store = createStore({
  // The "state" is like the pantry where all the ingredients (data) are stored.
  state,
  // The "getters" are like the recipe book that explains how to use the ingredients (state) to prepare dishes (computed data).
  getters: {},
  // The "mutations" are like the chefs who are authorized to directly modify the ingredients (state) in the pantry.
  mutations,
  // The "actions" are like the waiters who take orders from customers (components) and coordinate with the chefs (mutations) to update the pantry (state).
  actions,
})

// Exporting the Vuex store so it can be used throughout the application as the central storage room.
export default store;
