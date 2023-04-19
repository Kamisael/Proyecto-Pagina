import React, { useState } from "react";
import '../../../styles/Chat.css'





const Chat2 = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { message, isUser: true }]);
    setMessage("");
    setTimeout(() => {
      setMessages([
        ...messages,
        {
          message:
            "Fino señores.",
          isUser: false,
        },
        
      ]);
    }, 1000);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isUser ? "user" : "bot"}`}>
            {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          className="chat-input"
          value={message}
          onChange={handleChange}
          placeholder="Escribe un mensaje..."
        />
        <button className="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat2;

