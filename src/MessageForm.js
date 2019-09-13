import React from "react";

import "./MessageForm.css";

export default function MessageForm() {
  function sendMessage(messageObject, conversationId) {
    appState.addNewMessage(messageObject, conversationId);
  }

  let messageObj = {
    sentAt: new Date.now(),
    sender: {
      id: 1,
      name: "Molly Elfers",
      picture: "images/user.svg"
    },
    content: 
  };
  return (
    <form className="message-form">
      <input type="text" className="message-field" />
      <input
        type="submit"
        value="Send"
        className="submit-button"
        onClick={() => sendMessage()}
      />
    </form>
  );
}
