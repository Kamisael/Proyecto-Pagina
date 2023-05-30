import React, { useState, useEffect } from "react";
import "../../../styles/Chat.css";
import io from 'socket.io-client';

const socket = io("http://localhost:4000"); // Conectar al servidor Socket.IO en localhost

const Chat2 = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    
    // Escucha el evento 'mensaje-de-server' y agrega el mensaje recibido al estado de mensajes
    socket.on("mensaje-de-server", (payload) => {
      console.log("Mensaje recibido del servidor:", payload); // Verificar que se reciba el mensaje correctamente
      setMessages((messages) => [
        ...messages,
        { message: payload.message, isUser: false },
      ]);
      
    });
    socket.on('connect', () => {
      console.log('Conectado al servidor:', socket.id);
    });

    // Escucha el evento 'lista-usuarios' y actualiza el estado de nombres
    socket.on("lista-usuarios", (list) => {
      console.log("Lista de usuarios actualizada:", list); // Verificar que se reciba la lista correctamente
      setNames(list);
    });

    // Limpia los listeners de eventos cuando el componente se desmonta
    return () => {
      socket.off("mensaje-de-server");
      socket.off("lista-usuarios");
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { message, isUser: true }]);
    setMessage("");

    const payload = { mensaje: message };

    // Envia el mensaje al servidor
    socket.emit("enviar-mensaje", payload);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.isUser ? "user" : "bot"}`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div className="users-container">
        <h4>Usuarios activos:</h4>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
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
