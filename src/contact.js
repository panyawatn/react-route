import React, { useContext } from "react";
import { Menu } from ".";
import { userContext } from "./context";

export default function Contact() {
  let user = useContext(userContext);
  return (
    <>
      <Menu />
      <h3>{user}</h3>
      <h3>Ubon Ratchathani Univercity</h3>
      <p>
        Ubon Ratchathani University 85 Sathonlamark Road Warin Chamrap District
        Ubon Ratchathani Thailand 34190
      </p>
    </>
  );
}
