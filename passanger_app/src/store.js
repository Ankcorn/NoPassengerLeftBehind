import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

// const vuexPersist = new VuexPersist({
//     key: 'vuex', // The key to store the state on in the storage provider.
//     storage: window.sessionStorage, // or window.sessionStorage or localForage
//     // reducer: (state) => ({documents: state.documents}),
//     // Function that passes the state and returns the state with only the objects you want to store.
//     // reducer: state => state,
//     // Function that passes a mutation and lets you decide if it should update the state in localStorage.
//     // filter: mutation => (true)
// });

export default new Vuex.Store({
    state: {
    },
    mutations: {
        // addDocument(state, doc) {
        //     state.documents.push(doc);
        // },
        // incCounter(state) {
        //     state.counter++;
        // },
        // dicCounter(state) {
        //     state.counterAll--;
        // },
        // incAllCounter(state) {
        //     state.counter = state.counterAll;
        // },
    },
    getters: {
        // documentLength(state) {
        //     return state.documents.length
        // },
    },
    // plugins: [vuexPersist.plugin]
});
