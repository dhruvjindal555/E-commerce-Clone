import Navbar from "./Components/Navbar";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Poster from "./Components/Home/Poster";
import BestOfClothings from "./Components/Home/BestOfClothings";
import BestofElectronics from "./Components/Home/BestOfElectronics";
import Products, { productsLoader } from "./Components/Products/Products";
import ProductPage,{productPageLoader} from "./Components/ProductPage";
import HomeLayout from "./Layout/HomeLayout";

{/* <Route path="LogIn" element={<LogIn />} />
  <Route path="SignUp" element={<SignUp />} /> */}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} >
      <Route index path="" element={<><Poster /><BestOfClothings /><BestofElectronics /></>} />
      <Route path="Contact" element={<Contact />} />
      <Route path=":mainCategory" element={<Products />} loader={productsLoader} />
      <Route path=":mainCategory/:subCategory" element={<Products />} loader={productsLoader} />
      <Route path=":mainCategory/:subCategory/:id" element={<ProductPage  />} loader={productPageLoader}/>
    </Route >
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
