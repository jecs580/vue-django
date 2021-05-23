import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListBook from '../views//Book/ListBook.vue'
import EditBook from '../views//Book/EditBook.vue'
import DeleteBook from '../views//Book/DeleteBook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/books',
    name:'ListBook',
    component:ListBook
  },
  {
    path:'/books/:Bookid/edit',
    name:'EditBook',
    component:EditBook
  },
  {
    path:'/books/:Bookid/delete',
    name:'DeleteBook',
    component:DeleteBook
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
