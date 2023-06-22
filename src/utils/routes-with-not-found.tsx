import { Route, Routes } from "react-router-dom";

interface Props {
  children: JSX.Element | JSX.Element[];
}

// This component may used in app file to cover all the routes RouteChildrenProps, so we can add the error page in all the cases
const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>ERROR</h1>} />
    </Routes>
  );
};

export default RoutesWithNotFound;
