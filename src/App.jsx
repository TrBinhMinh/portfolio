import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./layout/Root";
import AboutMe from "./pages/AboutMe";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<p>Something went wrong!</p>}
    >
      <Route index element={<Homepage />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="services" element={<Services />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
