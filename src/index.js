import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SingUp from "./components/SingUp";
import NotFound from "./components/NotFound ";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="/sign-up" element={<SingUp></SingUp>}></Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </Fragment>
);
