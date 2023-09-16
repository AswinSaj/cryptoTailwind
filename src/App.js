import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";

function App() {
  return (
    <body className="font-[Poppins] bg-[#FFF5E4] min-h-screen">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="links">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/exchanges" element={<Exchanges />}></Route>
            <Route
              path="/Cryptocurrencies"
              element={<Cryptocurrencies />}
            ></Route>
            <Route path="/News" element={<News />}></Route>
          </Routes>
        </div>
      </div>
    </body>
  );
}

export default App;
