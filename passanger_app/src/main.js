import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import App from './App.vue';
import router from './router'
import store from './store'
import Toasted from 'vue-toasted';


Vue.use(VueApollo);
Vue.use(Toasted, {position: 'bottom-right', duration : 5000});
// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: process.env.LOCAL ? "http://localhost:5000" : "https://no-passenger-left-behind.herokuapp.com/graphql"
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo passanger_app
const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});
new Vue({
    apolloProvider,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
