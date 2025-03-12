import routes from "~/configs";
import HomeLayout from "~/Layouts/HomeLayout";
import HomePage from "~/page/HomePage";

export const publicRouters = [
  {
    component: HomePage,
    path: routes.home,
    layout: HomeLayout,
  }
];

export const privateRouters = [];
