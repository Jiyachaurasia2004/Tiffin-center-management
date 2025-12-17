import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Price from "./pages/Price";
import About from "./pages/About";
import Signup from "./pages/Signup";
import DashBoard from "./dashborad/DashBoard";
import Profile from "./dashborad/Profile";
import Main from "./dashborad/Main";
import Login from "./pages/Login";
import Weakly from "./dashborad/Weakly";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="menu" element={<Menu />} />
          <Route path="price" element={<Price />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />}>
            <Route path="main" element={<Main />} />
            <Route path="profile" element={<Profile />} />
              <Route path="weakly" element={<Weakly />} />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
