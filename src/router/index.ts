import { createRouter, createWebHistory } from "vue-router";

import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const pageTitle = to.matched.find((item) => item.meta.title);
  if (pageTitle) {
    window.document.title = pageTitle.meta.title as string;
  }
  next();
});

export default router;
