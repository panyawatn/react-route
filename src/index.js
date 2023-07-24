import React, { useRef, useContext } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import Contact from "./contact";
import { userContext } from "./context";

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
  let user = useContext(userContext);
  return (
    <nav className="bg-primary p-3 mb-3 text-center">
      <Link path="/main" linkName="Main" />
      <Link path="/courses" linkName="Courses" />
      <Link path="/contact" linkName="Contact Us" />
      <span className="px-2 text-light">{user}</span>
    </nav>
  );
}

function Index() {
  const header1 = useRef();
  return (
    // <userContext.Provider value={"Panyawatn"}>
    <>
      <Menu />
      <h3 ref={header1}>Hello</h3>
      <Button onClick={() => (header1.current.innerHTML = "React")}>
        Click Me
      </Button>
    </>
    // </userContext.Provider>
  );
}

function Courses() {
  const table = useRef();
  const tr = useRef([]);
  const data = [
    ["JS", 1000],
    ["React", 1500],
    ["Django", 2000],
    ["Fluter", 2500],
  ];

  const deleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  };

  return (
    <>
      <Menu />
      <h3>Courses</h3>
      {/* <Button>Click Me</Button> */}
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>Courses</th>
            <th>Price</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>

        {/* <tbody>
          <tr>
            <td>{data[0][0]}</td>
            <td>{data[0][1]}</td>
            <td>-</td>
          </tr>

          <tr>
            <td>{data[1][0]}</td>
            <td>{data[1][1]}</td>
            <td>-</td>
          </tr>

          <tr>
            <td>{data[2][0]}</td>
            <td>{data[2][1]}</td>
            <td>-</td>
          </tr>

          <tr>
            <td>{data[3][0]}</td>
            <td>{data[3][1]}</td>
            <td>-</td>
          </tr>
        </tbody> */}

        <tbody>
          {data.map((item, i) => {
            return (
              <tr ref={(el) => (tr.current[i] = el)} key={i}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  {" "}
                  <Button variant="danger" onClick={() => deleteRow(i)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
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
    <userContext.Provider value={"Panyawatn"}>
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
    </userContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// code by panyawatn;;;
