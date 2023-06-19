import "./App.scss";
import { accesKeyAxiosInterceptor } from "./core/infrastructure/interceptors/axios.interceptor";

accesKeyAxiosInterceptor();

function App() {
  return (
    <>
      <h1>hola react</h1>
    </>
  );
}

export default App;
