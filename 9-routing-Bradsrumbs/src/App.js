import { createBrowserRouter, Routes, Route, Link, NavLink, RouterProvider,  createRoutesFromElements } from "react-router-dom";
// layout
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

// pages
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";
import {careersLoader} from './pages/careers/Careers';
import CareerDetails from "./pages/careers/CareerDetails";
import { careerDetailsLoader } from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        {/* path='/' the same index */}
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />

        <Route path='help' element={<HelpLayout />}>
          <Route path='faq' element={<Faq />} />
          <Route path='contact' element={ <Contact /> }/>
        </Route>

        <Route path='careers' element={ <CareersLayout />} errorElement={<CareersError />}>
          <Route
          index
          element={<Careers />}
          loader={careersLoader}
          />
          <Route
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          />
        </Route>

        <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={ router } />
  );
}

export default App
