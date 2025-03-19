import React, { useEffect } from 'react'

function Chat() {

    useEffect(() =>  {
        const fetchMessages = async () => {
            const res = await fetch('https://chat-room.amirhoseinsadeghian2017.workers.dev/messages')
            const data = await res.json()
            console.log(data.messages.results);
            
        }
        fetchMessages()
    },[])


    return (
        <div className='bg-gray-700 w-full h-screen pt-20'>
            chat
        </div>
    )
}

export default Chat