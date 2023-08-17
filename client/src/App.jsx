import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import New from "./components/New";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </>
  );
}

export default App;
