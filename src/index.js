import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ContactList from "./ContactList";
import Conversation from "./Conversation";
import "./state.js";

ReactDOM.render(
  <main>
    <ContactList />
    <Conversation />
  </main>,
  document.getElementById("root")
);
