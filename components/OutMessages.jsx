import React from 'react'

function OutMessages({message}) {
    return (
        <div className="flex w-full justify-start">
            <div className="relative bg-gray-700 w-60 rounded-2xl p-4 text-white">
                <div>{message.username}</div>
                <div className='text-xl mb-2'>{message.message}</div>
                <div className='h-0.5 bg-gray-400'></div>
                <div className='text-sm mt-2'>{message.time}</div>
                <div className="absolute -left-1 bottom-3 w-4 h-4 bg-gray-700 rotate-45"></div>
            </div>
        </div>
    )
}

export default OutMessages