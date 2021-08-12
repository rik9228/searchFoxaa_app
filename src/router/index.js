import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => { 
      Store.dispatch('game/loadResultHistory');
      next();
    },
  },
  {
    path: "/game",
    name: "Game",
    // route level code-splitting
    // this generates a separate chunk (.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ "../views/Game.vue"),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
