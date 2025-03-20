import { useContext, useEffect, useState } from 'react'
import './App.css'
import Signup from '../components/Signup';
import Chatroom from '../components/Chatroom';
import { UsernameContext } from '../Context/Username';

function App() {

    const {username, setUsername} = useContext(UsernameContext)

    useEffect(() => {
        try{
            const localStorageUsername = localStorage.getItem('username');
            if (localStorageUsername) {
                setUsername(localStorageUsername);
            }
        } catch (error) {
            console.error(error);
        }

    }, []);


    return (
            <div className='container'>
                {username ? <Chatroom /> : <Signup />}
            </div>
    )
}

export default App
