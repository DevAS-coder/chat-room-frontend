import React, { useState } from 'react'

function SendMessage() {

    const [message, setmessage] = useState('')

    async function sendMessage() {
        const username = localStorage.getItem('username')
        const name = localStorage.getItem('name')

        const response = await fetch('https://chat-room.amirhoseinsadeghian2017.workers.dev/send', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                username: username,
                sender: name,
                message: message
            })
        })
        const data = await response.json()
        console.log(data.message);
        
        if (data.message === 'Message sent') {
            setmessage('')
        } else{
            console.log('error');
            // error Component
        }
    }

    return (
        <div className='fixed bottom-0 w-full h-12 bg-blue-950 flex '>
            <div className='flex-3/4'>
                <input type="text" className='w-full h-full bg-blue-950 text-white p-5 outline-0 focus:bg-blue-800 transition-all' placeholder='Type Something' value={message} onChange={(e) => setmessage(e.target.value)} />
            </div>
            <div className='flex-1/4 flex justify-center items-center'>
                <button className='bg-blue-950 text-white'><i className="fa-solid fa-paper-plane" onClick={sendMessage}></i></button>
            </div>
        </div>
    )
}

export default SendMessage