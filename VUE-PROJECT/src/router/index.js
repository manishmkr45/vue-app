import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/TodoExample.vue'
import Example from '../views/Example.vue'
import VuexTodo from '../components/vuex/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vue-example',
    name: 'Vue Example',
    component: Example
  },
  {
    path: '/vuex-example',
    name: 'Vue Example',
    component: VuexTodo
  }
]

const router = new VueRouter({
  routes
})

export default router
