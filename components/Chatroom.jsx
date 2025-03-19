import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { UsernameContext } from '../Context/Username';
import Chat from './Chat';

function Chatroom() {

  const { username, setUsername } = useContext(UsernameContext)
  const navigate = useNavigate()

  useEffect(() => {
    // const eventSource = new EventSource('https://chat-room.amirhoseinsadeghian2017.workers.dev/events');

    // eventSource.onmessage = (event) => {
    //     console.log(event.data);
    // }

    // eventSource.onerror = (event) => {
    //     console.error(event);
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
      <Chat/>
    </div>
  )
}

export default Chatroom