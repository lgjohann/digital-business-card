import React from 'react'

const message = `My current hobbies are reading and learning foreign languages.`

export default function Interests() {
    return (
        <div className='interests'>
            <h2>Interests</h2>
            <p>{message}</p>
        </div>
    )
}