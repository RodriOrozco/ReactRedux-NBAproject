import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { privateRoutes } from "../../core/models";

import RoutesWithNotFound from "../../utils/routes-with-not-found";

const Home = lazy(() => import("./Home/Home"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));

// THIS FILE MANAGE THE REDIRECTIONS OF THE USER WHEN IT'S LOGGED AND CAN ENTER TO PRIVATE SECTION
const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate replace to={privateRoutes.HOME} />} />
      <Route path={privateRoutes.HOME} element={<Home />} />
      <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};

export default Private;
