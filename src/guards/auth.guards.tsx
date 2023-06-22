import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import AppStore from "../core/interfaces/store.interface";
import { publicRoutes } from "../core/models";

const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState?.name ? (
    <Outlet />
  ) : (
    <Navigate replace to={publicRoutes.LOGIN} />
  );
};

export default AuthGuard;
