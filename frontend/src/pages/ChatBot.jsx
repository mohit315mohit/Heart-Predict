/* eslint-disable no-unused-vars */
// src/components/ChatBot.js
import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;


const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    try {
      const res = await axios.post(`${apiUrl}/api/chat`, {
        message,
      });
      setResponse(res.data.reply);
    } catch (err) {
      console.error(err);
      setResponse('Something went wrong...');
    }
  };

  return (
    <div>
      <h2>Chat with GPT</h2>
      <textarea
        rows="4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <br />
      <button onClick={handleSend}>Send</button>
      <div>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatBot;
