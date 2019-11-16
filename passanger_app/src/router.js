import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index/index-component';
import Profile from './components/profile/profile-component';
import Journey from './components/journey/journey-component';
import Feedback from './components/feedback/feedback-component';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
        },
        {
            path: '/journey',
            name: 'Journey',
            component: Journey,
        },
        {
            path: '/feedback',
            name: 'Feedback',
            component: Feedback,
        },
    ],
})
