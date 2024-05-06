import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; //import BOOTSTRAP
import Home from './pages/home/index.jsx';
import ResultColection from './pages/resultColection/index.jsx';
import Carrinho from './components/carrinho/index.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';// import do router dom

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'resultado_da_coleçao',
        element: <ResultColection />
      },
      {
        path: 'carrinho_de_compras',
        element: <Carrinho />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
