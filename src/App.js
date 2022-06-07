import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import SignupHost from "./pages/SignupHost/SignupHost";
import SignupSeeker from "./pages/SignupSeeker/SignupSeeker";
import NavBarLoggedOut from "./components/NavBar/NavBarLoggedOut";
import NavBarLoggedIn from "./components/NavBar/NavBarLoggedIn";
import Login from "./pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "./store/user/selectors";
import { useEffect } from "react";
import { getUserWithStoredToken } from "./store/user/actions";
import List from "./pages/List/List";
import ListDetails from "./pages/ListDetails/ListDetails";
import Profile from "./pages/Profile/Profile";
import Connections from "./pages/Connections/Connections";

function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      {token ? <NavBarLoggedIn /> : <NavBarLoggedOut />}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/signuph" element={<SignupHost />} />
        <Route path="/signups" element={<SignupSeeker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:id" element={<ListDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connections" element={<Connections />} />
      </Routes>
    </div>
  );
}

export default App;
