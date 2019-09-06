import React from "react";

import "./ContactList.css";

export default function ContactList() {
  return (
    <div class="contacts">
      <ul class="contact-list">
        <li class="contact" id="conversation-123">
          <a href="#123">
            <img src="/images/user.svg" class="user-icon" />
            <p>Molly, Steven</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
