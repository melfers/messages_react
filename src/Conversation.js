import React from "react";
import MessageHistory from "./MessageHistory";
import MessageForm from "./MessageForm";

import "./Conversation.css";

export default function Conversation() {
  return (
    <div className="conversation">
      <MessageHistory />
      <MessageForm />
    </div>
  );
}
