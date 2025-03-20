import React, { useContext, useEffect, useState } from 'react'
import { MessagesContext } from '../Context/Messages';
import { UsernameContext } from '../Context/Username';
import InMessages from './InMessages';
import OutMessages from './OutMessages';

function Chat() {

    const { messages, setMessages } = useContext(MessagesContext)
    const { username, setUsername } = useContext(UsernameContext)
    // const [usedDates, setusedDates] = useState([])
    
    let usedDates = new Set()
    function isNewDate(date){
        if (usedDates.has(date)) {
            return false
        } else {
            usedDates.add(date)
            return true
        }
    }

    function ChangeToMonth(month){
        let monthNames = [
            'January',   // 0
            'February',  // 1
            'March',     // 2
            'April',     // 3
            'May',       // 4
            'June',      // 5
            'July',      // 6
            'August',    // 7
            'September', // 8
            'October',   // 9
            'November',  // 10
            'December'   // 11
        ];
        return monthNames[month]
    }

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await fetch('https://chat-room.amirhoseinsadeghian2017.workers.dev/messages')
            const data = await res.json()
            const fetchedMessages = data.messages.results

            setMessages(fetchedMessages)

        }

        fetchMessages()
    }, [])


    return (
        <div className='bg-gray-900 w-full h-screen pt-20 overflow-y-scroll px-5 flex flex-col gap-5 pb-20'>
            {messages.length != 0 ? messages.map((message, index) => {

                const date = message.time.split(' / ')[1]
                const dateExists = isNewDate(date)
                const day = date.split('-')[0]
                const month = ChangeToMonth(Number(date.split('-')[1]) - 1)

                return (
                    <div key={index}>
                        <div className='flex justify-center '>
                            {dateExists && <div className='text-gray-900 text-lg text-center mb-3 rounded-4xl bg-gray-300 w-30'>{`${month} ${day}`}</div>}
                        </div>
                        <div key={message.id}>
                            {message.username === username ? <InMessages message={message} /> : <OutMessages message={message} />}
                        </div>
                    </div>
                )
            })
            : <div className='text-white flex justify-center items-center h-screen'>Loading...</div>
            }

        </div>
    )
}

export default Chat