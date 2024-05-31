import "./index.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import GuestList from "./components/GuestList";
import Planner from "./components/Planner";
import Profile from "./components/Profile";
import Vendors from "./components/Vendors";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<LandingPage />}></Route>
          <Route path={"/signup"} element={<SignUp />}></Route>
          <Route path={"/signin"} element={<SignIn />}></Route>
          <Route path={"/chat"} element={<Chat />}></Route>
          <Route path={"/guestlist"} element={<GuestList />}></Route>
          <Route path={"/planner"} element={<Planner />}></Route>
          <Route path={"/vendors"} element={<Vendors />}></Route>
          <Route path={"/profile"} element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
