import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignUpView.vue'
import LoginView from "@/views/LoginView";
import CreatePost from "@/views/CreatePost";
import ContactsView from "@/views/ContactsView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
    {
    path: '/create',
    name: 'create',
    component: CreatePost
    },
    {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
    }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ContactsView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
