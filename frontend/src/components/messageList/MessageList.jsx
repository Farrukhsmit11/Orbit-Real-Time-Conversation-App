import { useEffect, useRef } from "react";
import MessageBubble from "../messageBubble/MessageBubble";

export default function MessageList({ messages = [], person }) {
  const streamRef = useRef(null);

  useEffect(() => {
    streamRef.current?.scrollTo({ top: streamRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="message-stream"
      aria-label={`Messages with ${person.name}`}
      aria-live="polite"
      ref={streamRef}
    >
      <div className="date-divider">
        <span>Today</span>
      </div>

      {messages.map((message, index) => {
        const previousMessage = messages[index - 1];
        const grouped = previousMessage?.from === message.from
          && previousMessage?.sender === message.sender;
        const initials = message.sender
          ? message.sender.split(/\s+/).map((part) => part[0]).join("").slice(0, 2)
          : person.initials;

        return (
          <div
            className={`message-row ${message.from === "me" ? "message-row-mine" : ""} ${grouped ? "message-grouped" : ""}`}
            key={`${message.time}-${index}`}
          >
            {message.from !== "me" && (
              <span className={`message-avatar avatar-${person.color}`} aria-hidden="true">
                {!grouped && initials}
              </span>
            )}
            <div className="message-content">
              {person.group && message.from !== "me" && message.sender && !grouped && (
                <span className="sender-name">{message.sender}</span>
              )}
              <MessageBubble className={message.from === "me" ? "bubble-mine" : "bubble-theirs"}>
                <p>{message.text}</p>
              </MessageBubble>
              {message.reaction && (
                <span className="reaction-pill" aria-label={`Reaction ${message.reaction}`}>
                  {message.reaction}
                </span>
              )}
              <div className={`message-meta ${message.from === "me" ? "meta-mine" : ""}`}>
                <span>{message.from === "me" ? "You" : message.sender || person.name}</span>
                <time>{message.time}</time>
                {message.from === "me" && message.read && (
                  <span className="read-receipt" aria-label="Read">✓✓</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
