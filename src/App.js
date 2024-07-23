import "./App.css";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import BookingConfirmation from "./pages/BookingConfirmation";
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
        { path: "/confirmation", element: <BookingConfirmation /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
