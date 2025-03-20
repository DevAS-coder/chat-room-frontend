import React from 'react'

function InMessages({message}) {
    
    let messageTime = message.time.split(' / ')[0]

    function convertUTCToTimeZone(utcTime, timeZone) {
        const now = new Date();
        const utcDate = new Date(`${now.toISOString().split("T")[0]}T${utcTime}Z`);
        return utcDate.toLocaleTimeString("en-US", { timeZone, hour:'2-digit', minute:'2-digit',hour12:false });
    }
    
    messageTime = convertUTCToTimeZone(messageTime, "Asia/Tehran")

    return (
        <div className="flex w-full justify-end">
            <div className="relative bg-red-900 w-60 rounded-2xl p-4 text-white">
                {/* <div>Sender</div> */}
                <div className='text-xl mb-2'>{message.message}</div>
                <div className='h-0.5 bg-gray-400'></div>
                <div className='text-sm mt-2'>{messageTime}</div>
                <div className="absolute -right-1 bottom-3 w-4 h-4 bg-red-900 rotate-45"></div>
            </div>
        </div>
    )
}

export default InMessages