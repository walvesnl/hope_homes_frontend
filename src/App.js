import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import SignupHost from "./pages/SignupHost/SignupHost";
import SignupSeeker from "./pages/SignupSeeker/SignupSeeker";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/signuph" element={<SignupHost />} />
        <Route path="/signups" element={<SignupSeeker />} />
      </Routes>
    </div>
  );
}

export default App;
