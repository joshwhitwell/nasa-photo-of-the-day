import React from 'react'

export default function ReadMore({ explanation, closeReadMore }) {
    return (
        <div className='container'>
            <p>{explanation}</p>
            <p>Read Less <button onClick={() => {closeReadMore()}}>-</button></p>
        </div>
    )
}