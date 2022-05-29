import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AdminPanel from "./views/AdminPanel";
import Home from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
