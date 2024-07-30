import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <header>
      {/* btn menu */}
      <nav>
        <h1>Bar routing = bread crumbs</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        {/* path='/' the same index */}
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App
