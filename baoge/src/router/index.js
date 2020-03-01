import Vue from 'vue'
import Router from 'vue-router'
import menutable from '@/components/menutable'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import parent from '@/components/parent'
import input from '@/components/input'
import login from '@/components/login'
import order from '@/components/order'
import swiper from '@/components/swiper'
import Collection from '@/components/Collection'
import Trace from '@/components/Trace'
import Me from '@/components/Me'
import Appmain from '@/components/Appmain'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import mixindemo from '@/components/mixindemo'
import EmitUper from '@/components/EmitUper'
import scss from '@/components/scss'
import slotparent from '@/components/slotparent'

Vue.use(Router)
// export default new Router({
//   routes: [
export const constantRoutes = [
  {path: '/page1', component: page1},
  {path: '/page2', component: page2},
  {path: '/mixindemo', component: mixindemo},
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
    path: '/scss', //   访问路径： http://localhost:8080/#/home
    component: scss
  },
  {
    path: '/EmitUper',
    component: EmitUper
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
    path: '/swiper', //   访问路径： http://localhost:8080/#/order
    component: swiper
  },
  {
    path: '/slotparent', //   访问路径： http://localhost:8080/#/order
    component: slotparent
  },
  {
    path: '/appmain', //   访问路径： http://localhost:8080/#/order
    component: Appmain
  },
  {
    path: '/me',
    name: 'Me',
    component: Me,
    children: [
      {
        path: 'collectionPath',
        name: 'Collection',
        component: Collection
      },
      {
        path: 'tracePath',
        name: 'Trace',
        component: Trace
      }
    ]
  }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
