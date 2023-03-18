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
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers.jsx";

//layouts
import RootLayout from "./layouts/RootLayout.jsx";
import HelpLayout from "./layouts/HelpLayout.jsx";
import CareersLayout from "./layouts/CareersLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path={"faq"} element={<Faq />} />
        <Route path={"contact"} element={<Contact />} />
      </Route>

      <Route path={"careers"} element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
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
