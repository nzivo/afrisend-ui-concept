import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import publicRoutes from "../router/public";
import adminRoutes from "../router/admin";
import userRoutes from "../router/user";
// import store from "../store/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: { authenticated: false, onlyLoggedOut: true, isPublic: true },
    },
    ...publicRoutes,
    ...adminRoutes,
    ...userRoutes,
  ],
});

router.beforeEach((to, from, next) => {
  // const authenticated = store.state.user.authenticated;
  // const onlyLoggedOut = to.matched.some((record) => record.meta.onlyLoggedOut);
  const authenticated = to.meta.authenticated;
  const onlyLoggedOut = to.meta.onlyLoggedOut;
  const isPublic = to.matched.some((record) => record.meta.public);
  if (!isPublic && !authenticated) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  }
  if (authenticated && onlyLoggedOut) {
    return next("/");
  }
  next();
});

export default router;
