import React, { useState, useEffect } from 'react';
import socket from './socekt.-client';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Limpiar la conexión al desmontar el componente
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    // Enviar el mensaje al servidor a través de Socket.io
    socket.emit('enviar-mensaje', message);
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
        <button type="submit">Enar</button>
      </form>
    </div>
  );
};

export default Chat;
