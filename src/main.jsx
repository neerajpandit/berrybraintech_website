import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home.jsx";
import Us from "./pages/About/Us.jsx";
import Serv from "./pages/Services/Serv.jsx";
import Website from "./pages/Services/Website.jsx";
import Application from "./pages/Services/Application.jsx";
import SEO from "./pages/Services/SEO.jsx";
import Layout from "./Layout.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="/us" element={<Us/>}/>
      <Route path="/service" element={<Serv/>}/>
      <Route path="/web-development" element={<Website/>}/>
      <Route path="/app" element={<Application/>}/>
      <Route path="/seo" element={<SEO/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
