import "./styles/main.scss";
import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./core/models";
import { accesKeyAxiosInterceptor } from "./core/infrastructure/interceptors/axios.interceptor";

import AuthGuard from "./guards/auth.guards";
import RoutesWithNotFound from "./utils/routes-with-not-found";

// this is used to upload the components with lazy loading
const Private = lazy(() => import("./pages/Private/Private"));
const LandingPage = lazy(
  () => import("./pages/Public/LandingPage/LandingPage")
);

accesKeyAxiosInterceptor();

function App() {
  return (
    <section className="dark app">
      {/* suspense is used to display a loader until the routes can be rendered */}
      <Suspense fallback={<p>cargando...</p>}>
        <BrowserRouter>
          <RoutesWithNotFound>
            {/* if user is logged then he'll be redirected to home, and if he doesn't then the guard do his job*/}
            <Route path="/" element={<Navigate to={privateRoutes.PRIVATE} />} />
            <Route path={publicRoutes.LOGIN} element={<LandingPage />} />
            {/* if user exist then the AuthGuard component redirect the user to this private route */}
            <Route element={<AuthGuard />}>
              {/* when the user is redirected to private section the url have private/home for example */}
              <Route
                path={`${privateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </section>
  );
}

export default App;
