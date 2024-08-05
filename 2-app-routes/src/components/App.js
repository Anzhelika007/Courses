import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import About from "./About";
import  Confirmation from "./Confirmation";
import Header from "./Header";
import Register from "./Register";
import Session from "./Session";



import logo from "../assets/red30-tech-logo.png";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech"/>} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />} />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
