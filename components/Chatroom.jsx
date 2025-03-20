import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Chat from './Chat';
import { UsernameContext } from '../Context/Username';
import { MessagesContext } from '../Context/Messages';

function Chatroom() {

  const { username, setUsername } = useContext(UsernameContext)
  const { messages, setMessages } = useContext(MessagesContext)
  const navigate = useNavigate()

  useEffect(() => {
    // const eventSource = new EventSource('https://chat-room.amirhoseinsadeghian2017.workers.dev/events');

    // eventSource.onmessage = (event) => {
    //   if (event.data !== 'No New Messages') {
    //     console.log(event.data);
    //     setMessages(prevMessages => [...prevMessages, JSON.parse(event.data)]);
    //   }
    //   else {
    //     console.log(event.data);
    //   }
    // }

    // eventSource.onerror = (event) => {
    //   console.error(event);
    // }

    try {
      const localStorageUsername = localStorage.getItem('username');
      if (localStorageUsername) {
        setUsername(localStorageUsername);
      } else {
        navigate('/')
      }
    } catch (error) {
      console.error(error);
    }

  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <Header />
      <Chat />
    </div>
  )
}

export default Chatroom