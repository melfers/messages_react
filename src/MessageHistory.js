import React from "react";
import appState from "./state.js";

import "./MessageHistory.css";

export default function MessageHistory() {
  const messageList = appState.conversations
    .find(conversation => appState.selectedConversation == conversation.id)
    .messages.map(message => {
      if (message.sender.id === 1) {
        return (
          <li class="message -from-me">
            <p>
              {message.sender.name}: {message.content}
            </p>
          </li>
        );
      } else {
        return (
          <li class="message -from-user">
            <p>
              {message.sender.name}: {message.content}
            </p>
          </li>
        );
      }
    });
  messageList.join("");

  return <ul className="message-history">{messageList}</ul>;
}
