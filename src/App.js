import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Plants from "./Pages/Plants";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <div>
      <Home />
     </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "plants",
        element: <Plants />,
      },
    ],
  }
]);
export default router;
