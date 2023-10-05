import authMiddleware from "./authMiddleware";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/PageHome.vue"),
        beforeEnter: authMiddleware,
      },
      {
        path: "/home",
        component: () => import("pages/DashboardPage.vue"),
        beforeEnter: authMiddleware,
      },
      { path: "/favorite", component: () => import("pages/FavoritePage.vue") },
      { path: "/create", component: () => import("pages/CreatePage.vue") },
      { path: "/search", component: () => import("pages/SearchPage.vue") },
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/register", component: () => import("pages/SignUpPage.vue") },
      { path: "/camera", component: () => import("pages/PageCamera.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
