const DOMAIN_TITLE = "SITE NAME";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/HomePage.vue"),
    meta: {
      title: `Home | ${DOMAIN_TITLE}`,
    },
  },
];
