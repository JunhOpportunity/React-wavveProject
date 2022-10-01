import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Routes/Home";
import Navbar from "./Components/Header";
import Test from "./Routes/TestPage";
import My from "./Routes/My";
import Live from "./Routes/Live";
import Category from "./Routes/Category";
import Search from "./Routes/Search";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/live" element={<Live />} />
          <Route path="/my" element={<My />} />
          <Route path="/test" element={<Test />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}
