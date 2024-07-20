import Navbar from "./Components/Navbar";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductPage from "./Components/ProductPage";


function App() {
  return (
    <>
      <Router>
        <div className="light">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<ProductPage/>} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
