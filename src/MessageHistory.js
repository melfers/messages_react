import React from "react";

import "./MessageHistory.css";

export default function MessageHistory() {
  return (
    <div className="messages">
      <ul className="message-history">
        <li className="message -from-me">
          <p>Molly: Hi Steven!</p>
        </li>
        <li className="message -from-user">
          <p>Steven: Hi Molly!</p>
        </li>
      </ul>
    </div>
  );
}
