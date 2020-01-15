import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    sections: [
      'All',
      'Offers',
      'Incomes',
      'Outcomes'
    ],
    section: 'All',
    totalSummary: [
      {
        name: 'Offers',
        lists: [
          {name: 'Offer #1', id: '1'},
          {name: 'Offer #2', id: '2'},
          {name: 'Offer #3', id: '3'}
        ]
      },
      {
        name: 'Incomes',
        lists: [
          {name: 'Income #1', id: '4'},
          {name: 'Income #2', id: '5'},
          {name: 'Income #3', id: '6'}
        ]
      },
      {
        name: 'Outcomes',
        lists: [
          {name: 'Outcome #1', id: '7'},
          {name: 'Outcome #2', id: '8'},
          {name: 'Outcome #3', id: '9'}
        ]
      },
    ],
    summary: [],
  },
  mutations: {
    SET_SECTION (state, payload) {
      state.section = payload
    },
    SET_SUMMARY (state, payload) {
      state.summary = payload
    }
  },
  actions: {
    FETCH_SUMMARY ({commit, state}) {
      let parsed = [];
      if (state.section === 'All') parsed = state.totalSummary
      else parsed = state.totalSummary.filter((value => { return value.name === state.section }))
      return commit('SET_SUMMARY', parsed)
    }
  }
})

export default store
