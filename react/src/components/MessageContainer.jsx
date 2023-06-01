import React, { useEffect, useRef } from "react";

const MessageContainer = ({ messages }) => {
  const messageRef = useRef();
  useEffect(() => {
    if (messageRef && messageRef.current) {
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({
        left: 0,
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const mapMessages = (m, index) => {
    return (
      <div key={index} className="user-message">
        <div className="message bg-primary">{m.message}</div>
        <div className="from-user">{m.user}</div>
      </div>
    );
  };

  return (
    <div ref={messageRef} className="message-container">
      {messages&&messages.map(mapMessages)}
    </div>
  );
};

export default MessageContainer;
