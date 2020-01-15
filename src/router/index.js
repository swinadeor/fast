import VueRouter from 'vue-router'
import Vue from "vue";
import Sections from "../components/Sections";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Sections },
  ]
})

export default router