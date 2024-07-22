import "./App.css";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/booking", element: <Booking /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
