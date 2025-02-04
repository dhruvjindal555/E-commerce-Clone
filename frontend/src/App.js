import Navbar from "./Components/Home/Navbar";
import LogIn from "./Components/Auth/LogIn";
import SignUp from "./Components/Auth/SignUp";
import Contact from "./Components/Contact";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Poster from "./Components/Home/Poster";
import BestOfClothings from "./Components/Home/BestOfClothings";
import BestofElectronics from "./Components/Home/BestOfElectronics";
import Products, { productsLoader } from "./Components/Products/Products";
import ProductPage, { productPageLoader } from "./Components/Products/ProductPage";
import HomeLayout from "./Layout/HomeLayout";
import AuthLayout from "./Layout/AuthLayout";
import CartState from "./context/CartContext/CartState";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer";
import VerifyOTP from "./Components/Auth/VerifyOTP";
import AuthState from "./context/AuthContext/AuthState";
import { ToastContainer } from 'react-toastify';
import ProfilePage from "./Components/User/ProfilePage";
import OrderState from "./context/OrderContext/OrderState";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />} >
        <Route index path="" element={<><Poster /><BestOfClothings /><BestofElectronics /></>} />
        <Route path="cart" element={<Cart />} />
        <Route path="profilePage" element={<ProfilePage />} />
        <Route path=":mainCategory" element={<Products />} loader={productsLoader} />
        <Route path=":mainCategory/:subCategory" element={<Products />} loader={productsLoader} />
        <Route path=":mainCategory/:subCategory/:id" element={<ProductPage />} loader={productPageLoader} />
      </Route >
      {/* Routes with No Categories Layout */}
      <Route path="Contact" element={<><Navbar /><Contact /><Footer /></>} />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signup/verify" element={<VerifyOTP />} />
      </Route>
    </>

  )
)

function App() {
  return (
    <CartState>
      <AuthState>
        <OrderState>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="dark"
          />
          <RouterProvider router={router} />
        </OrderState>
      </AuthState>
    </CartState>
  );
}

export default App;
