import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GamePage from './GamePage';
import CreditPage from './CreditPage';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
  {
    path: "/credits",
    element: <CreditPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
