import { Navigate, Route } from "react-router-dom";
import { privateRoutes } from "../../core/models";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import RoutesWithNotFound from "../../utils/routes-with-not-found";

// THIS FILE MANAGE THE REDIRECTIONS OF THE USER WHEN IT'S LOGGED AND CAN ENTER TO PRIVATE SECTION
const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate replace to={privateRoutes.PRIVATE} />}
      />
      <Route path={privateRoutes.HOME} element={<Home />} />
      <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};

export default Private;
