import "./login.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../../core/models";
import {
  loginUserReducer,
  logoutUserReducer,
  userKey,
} from "../../redux/slices/user/login.user";
import { loginUserService } from "../../core/infrastructure/services/auth.services";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(logoutUserReducer(userKey));
  //   navigate(publicRoutes.LOGIN);
  // }, []);

  const handleLogin = async () => {
    try {
      const response = await loginUserService();
      dispatch(loginUserReducer(response?.data));
      navigate(privateRoutes.PRIVATE, { replace: true });
    } catch (error) {
      console.log(error);
      throw new Error("something got wrong with login user");
    }
  };

  return (
    <section className="login">
      <div className="section-left">
        <button onClick={() => handleLogin()}>Login bro</button>
      </div>
      <div className="section-right"></div>
    </section>
  );
};

export default Login;
