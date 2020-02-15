import Vue from 'vue'
import Router from 'vue-router'
import menutable from '@/components/menutable'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import parent from '@/components/parent'
import input from '@/components/input'
import login from '@/components/login'
import order from '@/components/order'
import slot1 from '@/components/slot1'
import Collection from '@/components/Collection'
import Trace from '@/components/Trace'
import Me from '@/components/Me'
import slotparent from '@/components/slotparent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home', //   访问路径： http://localhost:8080/#/home
      component: home
    },
    {
      path: '/parent', //   访问路径： http://localhost:8080/#/parent
      component: parent
    },
    {
      path: '/input', //   访问路径： http://localhost:8080/#/parent
      component: input
    },
    {
      path: '/menutable', //   访问路径： http://localhost:8080/#/menutable
      component: menutable
    },
    {
      path: '/login', //   访问路径： http://localhost:8080/#/login
      component: login
    },
    {
      path: '/order', //   访问路径： http://localhost:8080/#/order
      component: order
    },
    {
      path: '/slot1', //   访问路径： http://localhost:8080/#/order
      component: slot1
    },
    {
      path: '/slotparent', //   访问路径： http://localhost:8080/#/order
      component: slotparent
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
      children: [
        {
          path: 'collection',
          name: 'Collection',
          component: Collection
        },
        {
          path: 'trace',
          name: 'Trace',
          component: Trace
        }
      ]
    }
  ]
})
