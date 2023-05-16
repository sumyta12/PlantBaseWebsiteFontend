import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Plants from "./Pages/Plants";
import HomePage from "./Pages/HomePage";
import Shop from "./Component/Shop/Shop";
import Blog from "./Pages/Blog";
import Video from "./Pages/Video";
import RegistrationForm from "./Pages/RegistrationForm";
import LoginPage from "./Component/LogIn/LoginPage";
import AuthProivder from "./Context/AuthProivder";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import ShopGallery from "./Component/Shop/ShopGallery";
import Practice from "./Practice/Practice";
import PracticeUpdate from "./Practice/PracticeUpdate";

const App = () => {
  return (
    <div>
      <AuthProivder>
        <Home />
      </AuthProivder>
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
      {
        path: "shop",
        element:<Shop/>
      },{
        path: "shop/:shopId",
        element:<ShopGallery/>
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "video",
        element: <PrivateRoute />,
        children: [
          {
            path: "video",
            element: <Video />,
          },
        ],
      },
      {
        path: "register",
        element: <RegistrationForm />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },{
        path:"practice",
        element : <Practice />
      },
      {
        path:"practice/update/:id",
        element : <PracticeUpdate />
      }
    ],
  },
]);
export default router;
