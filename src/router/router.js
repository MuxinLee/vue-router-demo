import Vue from 'vue'
import Router from 'vue-router'
import Fruits from '../components/Fruits'
import Vegetables from '../components/Vegetables'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/fruits'
        },
        {
            path: '/fruits',
            name: Fruits,
            component: Fruits,
            children: [
                {
                    path:'/',
                    name: 'noticeAll',
                    //component: Allnotice,
                    meta: { keepAlive: true }
                },
                {
                    path:'/notice/collection',
                    name: 'noticeCollection',
                    //component: Collection,
                    meta: { keepAlive: true }
                },
            ]
        },
        {
            path: '/vegetables',
            name: Vegetables,
            component: Vegetables
        }
    ]
})