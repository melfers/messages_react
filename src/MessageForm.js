import React from "react";

import "./MessageForm.css";

export default function MessageForm() {
  return (
    <div>
      <form class="message-form">
        <input type="text" class="message-field" />
        <input type="submit" value="Send" class="submit-button" />
      </form>
    </div>
  );
}
