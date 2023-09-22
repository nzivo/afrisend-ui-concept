import Login from "../views/auth/Login.vue";
import Registration from "../views/auth/Registration.vue";
import ForgotPassword from "../views/auth/ForgottenPassword.vue";
import NotFound from "../views/error/NotFound.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration,
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/:notFound(.*)",
    name: "notFound",
    component: NotFound,
  },
];

export default routes.map((route) => {
  const meta = {
    public: true,
    onlyLoggedOut: true,
  };
  return { ...route, meta };
});
