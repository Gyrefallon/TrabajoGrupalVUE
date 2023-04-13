import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import UserList from "@/components/UserList";
//import UserDetails from "@/components/UserDetails";
import ProductsCards from "@/components/ProductsCards";
import Login from "@/views/Login"

const routes = [
  {
    path: "/",
    name: "LoginRoot",
    component: Login,
  },
  {
    path: "/products",
    name: "ProductsCards",
    component: ProductsCards
  },
  // {
  //   path: "/users/:userId",
  //   name: "UserDetails",
  //   component: UserDetails
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Login.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
