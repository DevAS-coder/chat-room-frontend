import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [username, setUsername] = useState('');
    const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    async function checkUsername() {
        const response = await fetch('https://chat-room.amirhoseinsadeghian2017.workers.dev/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username })
        });

        const data = await response.json();
        
        if (!(data.message === 'available!')) {
            setIsUsernameAvailable(false);
        }
        else{
            localStorage.setItem('username', username);
            localStorage.setItem('name', name);
            navigate('/chatroom');
        }
    }

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className='flex flex-col gap-10 justify-center items-center border-2 border-red-500 rounded-lg p-8 h-96 shadow-red-500 shadow-md'>
                    <h1 className='font-bold text-4xl'>Signup</h1>

                    <input className='text-center p-2 border-2 border-red-500 rounded-4xl outline-0' type="text" placeholder='Enter your Name'
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input className='text-center p-2 border-2 border-red-500 rounded-4xl outline-0' type="text" placeholder='Enter your Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {isUsernameAvailable ? null : <p className='text-red-600'>This Username Is Already Taken</p>}

                    <button className='bg-green-400 text-black px-5 py-2 rounded-4xl cursor-pointer'
                        onClick={checkUsername}
                    >Signup</button>
                </div>
            </div>
        </>
    )
}

export default Signup