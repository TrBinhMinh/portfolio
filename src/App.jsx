import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./layout/Root";
import AboutMe from "./pages/AboutMe";
import ContactForm from "./pages/ContactForm";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";

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
      <Route path="contact" element={<ContactForm />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
