import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import CartPage from './Pages/CartPage.jsx'
import { store } from './redux/index.js'
import { Provider } from 'react-redux';
import CheckoutPage from './Pages/CheckoutPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<HomePage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  
)
