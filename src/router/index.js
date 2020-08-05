// const router = require('vue-router')
import VueRouter from 'vue-router'
import Vue from 'vue'
import Main from '../components/Main'
import Profile from '../views/Profile'

Vue.use(VueRouter)


const routes = [
    {
        name: 'home',
        path: '/',
        component: Main
    },
    {
        name: 'user',
        path: '/user',
        component: Main,
        children: [
            {
                name: 'profile',
                path: 'profile',
                component: Profile
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
