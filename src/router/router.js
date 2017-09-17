import Vue from 'vue'
import Router from 'vue-router'
import Fruits from '../components/Fruits'
import Vegetables from '../components/Vegetables'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/fruits',
            name: Fruits,
            component: Fruits
        },
        {
            path: '/vegetables',
            name: Vegetables,
            component: Vegetables
        }
    ]
})