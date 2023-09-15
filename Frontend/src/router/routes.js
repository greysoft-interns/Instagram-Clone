const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/PageHome.vue") },
      { path: "/home", component: () => import("pages/DashboardPage.vue") },
      { path: "/favorite", component: () => import("pages/FavoritePage.vue") },
      { path: "/create", component: () => import("pages/CreatePage.vue") },
      { path: "/search", component: () => import("pages/SearchPage.vue") },
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
