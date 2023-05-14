// router.js
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "./pages/Dashboard.vue";
import OtherPage from "./pages/OtherPage.vue";
import { Routes, RoutesName } from "./utils/constants";

const routes: Array<RouteRecordRaw> = [
  {
    path: Routes.DASHBOARD,
    name: RoutesName.DASHBOARD,
    component: () => Dashboard,
  },
  {
    path: Routes.DOCUMENT,
    name: RoutesName.DOCUMENT,
    component: () => OtherPage,
  },
  {
    path: Routes.IDEA,
    name: RoutesName.IDEA,
    component: () => OtherPage,
  },
  {
    path: Routes.SECURITY,
    name: RoutesName.SECURITY,
    component: () => OtherPage,
  },
  {
    path: Routes.SETTING,
    name: RoutesName.SETTING,
    component: () => OtherPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
