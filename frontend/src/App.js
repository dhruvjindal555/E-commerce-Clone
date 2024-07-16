import Navbar from "./Components/Navbar";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <div className="light">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<h1>Home</h1>} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
