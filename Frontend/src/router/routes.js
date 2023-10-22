import authMiddleware from "./authMiddleware";

const routes = [
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),

    children: [
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/register", component: () => import("pages/SignUpPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter: authMiddleware,

    children: [
      {
        path: "/",
        component: () => import("pages/PageHome.vue"),
      },
      {
        path: "/home",
        component: () => import("pages/PageHome.vue"),
      },
      { path: "/favorite", component: () => import("pages/FavoritePage.vue") },
      { path: "/create", component: () => import("pages/CreatePage.vue") },
      { path: "/search", component: () => import("pages/SearchPage.vue") },

      { path: "/camera", component: () => import("pages/PageCamera.vue") },

      {
        path: "/dashboard",
        component: () => import("pages/DashboardPage.vue"),
      },
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
