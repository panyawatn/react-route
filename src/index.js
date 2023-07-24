import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Contact from "./contact";

function Link(props) {
  return (
    <NavLink
      to={props.path}
      className="link-light m-3 "
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          textDecoration: isActive ? "none" : "underline",
        };
      }}
    >
      {props.linkName}
    </NavLink>
  );
}

export function Menu() {
  return (
    <nav className="bg-primary p-3 mb-3 text-center">
      <Link path="/main" linkName="Main" />
      <Link path="/courses" linkName="Courses" />
      <Link path="/contact" linkName="Contact Us" />
    </nav>
  );
}

function Index() {
  return (
    <>
      <Menu />
      <h3>Hello</h3>
      <Button>Click Me</Button>
    </>
  );
}

function Courses() {
  return (
    <>
      <Menu />
      <h3>Courses</h3>
      <Button>Click Me</Button>
    </>
  );
}

// function Contact() {
//   return (
//     <>
//       <Menu />
//       <h3>Contact Us</h3>
//       <Button>Click Me</Button>
//     </>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 m-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// code by panyawatn;;;
