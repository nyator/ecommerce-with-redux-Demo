import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { store } from './store/store.js'
import { Provider } from 'react-redux'

import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import MainLayout from './layouts/MainLayout.jsx'
import Shop from './pages/Shop.jsx'
import Checkout from './pages/Checkout.jsx'
import Cart from './pages/Cart.jsx'
import Faqs from './pages/Faqs.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "cart", Component: Cart },
      { path: "faqs", Component: Faqs },
      { path: "checkout", Component: Checkout },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)