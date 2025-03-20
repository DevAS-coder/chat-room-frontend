import React, { useContext, useEffect } from 'react'
import { MessagesContext } from '../Context/Messages';
import { UsernameContext } from '../Context/Username';
import InMessages from './InMessages';
import OutMessages from './OutMessages';

function Chat() {

    const { messages, setMessages } = useContext(MessagesContext)
    const { username, setUsername } = useContext(UsernameContext)

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await fetch('https://chat-room.amirhoseinsadeghian2017.workers.dev/messages')
            const data = await res.json()
            const fetchedMessages = data.messages.results
            console.log(fetchedMessages);
            
            setMessages(fetchedMessages)

        }

        fetchMessages()
    }, [])


    return (
        <div className='bg-gray-900 w-full h-170 pt-15 overflow-y-scroll px-5 flex flex-col gap-5'>
            {messages.map((message) => {
                return (
                    <div key={message.id}>
                        {message.username === username ? <InMessages message={message} /> : <OutMessages message={message} />}
                    </div>
                )
            })}
            
        </div>
    )
}

export default Chat