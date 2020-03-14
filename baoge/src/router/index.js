import Vue from 'vue'
import Router from 'vue-router'
import menutable from '@/components/menutable'
import home from '@/components/home'
import parent from '@/components/parent'
import input from '@/components/input'
import monitor from '@/components/monitor'
import login from '@/components/login'
import state from '@/components/state'
import swiper from '@/components/swiper'
import Collection from '@/components/Collection'
import Trace from '@/components/Trace'
import Me from '@/components/Me'
import Appmain from '@/components/Appmain'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import EmitUper from '@/components/EmitUper'
import scss from '@/components/scss'
import slotparent from '@/components/slotparent'
import index from '@/components/index'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/index',
    component: index,
    children: [
      {
        path: 'slotparent',
        name: 'slotparent',
        component: () => import('@/components/slotparent'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/components/home'),
      },
      {
        path: 'input',
        name: 'input',
        component: () => import('@/components/input'),
      },
      {
        path: 'monitor',
        name: 'monitor',
        component: () => import('@/components/monitor'),
      },
      {
        path: 'scss',
        name: 'scss',
        component: () => import('@/components/scss'),
      },
      {
        path: 'emitupper',
        name: 'emitupper',
        component: () => import('@/components/EmitUper'),
      },
      {
        path: 'state',
        name: 'state',
        component: () => import('@/components/state'),
      },
      {
        path: 'swiper',
        name: 'swiper',
        component: () => import('@/components/swiper'),
      },
      {
        path: 'me',
        name: 'me',
        component: () => import('@/components/me'),
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
      },
      {
        path: 'mixindemo',
        name: 'mixindemo',
        component: () => import('@/components/mixindemo')
      },
      {
        path: 'parent',
        name: 'parent',
        component: () => import('@/components/parent')
      },
      {
        path: 'input',
        component: input
      },
      {
        path: 'menutable',
        name: 'menutable',
        component: () => import('@/components/menutable')
      }
    ]
  },
  {path: '/page1', component: page1},
  {path: '/page2', component: page2},
  {
    path: '/',
    name: 'login',
    component: login
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
