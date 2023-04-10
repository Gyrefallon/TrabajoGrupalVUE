import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
<<<<<<< HEAD
import Login from "../views/Login.vue";
//import UserDetails from "@/components/UserDetails";
=======
// import UserList from "@/components/UserList";
//import UserDetails from "@/components/UserDetails";
import ProductsCards from "@/components/ProductsCards";

>>>>>>> master

const routes = [
  {
    path: "/",
    name: "HomeRoot",
<<<<<<< HEAD
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
=======
    component: Home
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
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  }
>>>>>>> master
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
