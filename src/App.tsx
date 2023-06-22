import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { accesKeyAxiosInterceptor } from "./core/infrastructure/interceptors/axios.interceptor";
import LandingPage from "./pages/LandingPage/LandingPage";

accesKeyAxiosInterceptor();

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>hola react</h1>} />
          <Route path="*" element={<h1>ERROR</h1>} />
          <Route path="/login" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
