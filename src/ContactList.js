import React from "react";

import "./ContactList.css";
import userImage from "./images/user.svg";
import appState from "./state.js";

export default function ContactList() {
  function selectConversation(conversationId) {
    appState.setSelectedConversation(conversationId);
  }
  let conversationList = appState.conversations.map(conversation => {
    let participantNames = conversation.participants.map(participant => {
      return participant.name;
    });
    return (
      <a href="#{conversation.id}">
        <li
          class="contact"
          id="conversation-{conversation.id}"
          onClick={() => selectConversation(conversation.id)}
        >
          <img src={userImage} class="user-icon" />
          <p>{participantNames.join(", ")}</p>
        </li>
      </a>
    );
  });
  conversationList.join("");

  return (
    <div className="contacts">
      <ul className="contact-list">{conversationList}</ul>
    </div>
  );
}
