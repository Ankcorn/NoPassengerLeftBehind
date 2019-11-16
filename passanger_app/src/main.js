import Vue from 'vue'
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import App from './App.vue'
Vue.use(VueApollo);
console.log(process.env)
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.LOCAL ? "http://localhost:5000" : "https://no-passenger-left-behind.herokuapp.com/graphql"
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});


new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})
