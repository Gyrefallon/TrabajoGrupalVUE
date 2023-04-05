import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
//import UserDetails from "@/components/UserDetails";

const routes = [
  {
    path: "/",
    name: "HomeRoot",
    component: Home,
  },
 
  {
    path: "/",
    name: "LoginUser",
    component: Login,
  },
//   {
//     path: "/Login",
//     name: "LoginUser",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/Login.vue")
//   }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
