import React from 'react';

// Message Component imported from the Message Directory Component
import Message from './Message/Message';
// React Scroll to Botttom when height of he messages get larger than the height of the container
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';


const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
        {messages.map((message, index) => <div key={index}> <Message message={message} name={name} /> </div>)}
    </ScrollToBottom>
)
  
export default Messages;