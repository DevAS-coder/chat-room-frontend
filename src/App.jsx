import { useEffect, useState } from 'react'
import './App.css'
import Signup from '../components/Signup';
import Chatroom from '../components/Chatroom';

function App() {

    const [username, setusername] = useState('')

    useEffect(() => {
        // const eventSource = new EventSource('https://chat-room.amirhoseinsadeghian2017.workers.dev/events');

        // eventSource.onmessage = (event) => {
        //     console.log(event.data);
        // }

        // eventSource.onerror = (event) => {
        //     console.error(event);
        // }

        try{
            const localStorageUsername = localStorage.getItem('username');
            if (localStorageUsername) {
                setusername(localStorageUsername);
            }
        } catch (error) {
            console.error(error);
        }

    }, []);


    return (
        <>
            <div className='container'>
                {username ? <Chatroom /> : <Signup />}
            </div>
        </>
    )
}

export default App
