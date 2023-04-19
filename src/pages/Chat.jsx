import React from "react";
import { useState } from 'react';
import '../styles/Chat.css'

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setMessages(messages => [...messages, message]);
    setMessage('');
  };

  return (
    <div className="Chat">
      <div className="ChatMessages">
        {messages.map((message, index) => (
          <div key={index} className="ChatMessage">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Escribir un mensaje" value={message} onChange={event => setMessage(event.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default Chat;
