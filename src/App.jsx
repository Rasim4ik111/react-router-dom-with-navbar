import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//pages
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About";
import Faq from "./pages/help/Faq.jsx";
import Contact from "./pages/help/Contact.jsx";
//layouts
import RootsLayout from "./layouts/RootsLayout.jsx";
import HelpLayout from "./layouts/HelpLayout.jsx";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootsLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path={"faq"} element={<Faq />} />
        <Route path={"contact"} element={<Contact />} />
      </Route>
      <Route path={"*"} element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
