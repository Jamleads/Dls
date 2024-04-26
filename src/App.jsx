import LayOut from "./Components/LayOut";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Services from "./Pages/Services";

function App() {
  const theRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route to="/" element={<LayOut />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="team" element={<Team />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={theRoute} />
    </>
  );
}

export default App;
