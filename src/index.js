import React from "react";
import ReactDOM from "react-dom";

import ContactList from "./ContactList";
import MessageHistory from "./MessageHistory";
import MessageForm from "./MessageForm";

import "./index.css";

ReactDOM.render(
  <main>
    <ContactList />
    <MessageHistory />
    <MessageForm />
  </main>,
  document.getElementById("root")
);
