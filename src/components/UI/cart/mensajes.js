import React, { useState } from 'react';

function ChatPrompt({ onSend }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="box">
      <div className="field has-addons">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Mensaje al Usuario"
            value={message}
            onChange={handleMessageChange}
            onKeyDown={handleKeyDown}
          />
        </p>

        <p className="control">
          <button className="button is-info" onClick={handleSendMessage}>
            <span className="icon">
              <i className="fas fa-paper-plane"></i>
            </span>
            <span>Enviar</span>
          </button>
        </p>
      </div>
    </div>
  );
}

export default ChatPrompt;
