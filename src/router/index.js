import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/store/auth";
import {auth, redirectIfAuthenticated} from '@/router/guard';

const routes = [
  {
    path: "/login",
    component: () => import("@/layouts/Auth.vue"),
    beforeEnter: redirectIfAuthenticated,
    children: [
      {
        path: "",
        name: "login",
        component: () => import("@/views/Login.vue"),
      }
    ],
  },
  {
    path: "/cadastrar",
    component: () => import("@/layouts/Auth.vue"),
    beforeEnter: redirectIfAuthenticated,
    children: [
      {
        path: "",
        name: "register",
        component: () => import("@/views/Register.vue"),
      }
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/Dashboard.vue"),
    beforeEnter: auth,
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next)=>{
  const authStore = useAuth();
  authStore.sanctum();
  next()
});

export default router;
