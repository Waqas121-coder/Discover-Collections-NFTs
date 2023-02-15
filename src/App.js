import NavBar from "./Components/Navbar/NavBar";
import Discover from "./Components/Pages/Discover/Discover";
import Swaping from "./Components/Pages/Swaping/Swaping";
import Dashbord from "./Components/Pages/Dashbord/Dashbord";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Discover/>} />
      <Route path="/presale" element={<Swaping/>} />
      <Route path="/staking" element={<Dashbord/>} />
      {/* <Discover /> */}
      {/* <Swaping /> */}
      </ Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
