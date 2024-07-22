import Navbar from "./Components/Navbar";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";
import Poster from "./Components/Home/Poster";
import BestOfClothings from "./Components/Home/BestOfClothings";
import BestofElectronics from "./Components/Home/BestOfElectronics";
import Products from "./Components/Products/Products";
import ProductPage from "./Components/ProductPage";


function App() {
  return (
    <>
      <Router>
        <div className="light">
          <Navbar />
          <Routes>
            <Route path="/" exact element={
              <>
                <Categories />
                <Poster />
                <BestOfClothings />
                <BestofElectronics />
              </>
            } />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/:mainCategory" exact element={
              <>
                <Categories />
                <Products />
              </>} />
            <Route path="/:mainCategory/:subCategory" element={
              <>
                <Categories />
                <Products />
              </>} />
            <Route path="/:mainCategory/:subCategory/:id" element={
              <>
                <Categories />
                <ProductPage/>
              </>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
