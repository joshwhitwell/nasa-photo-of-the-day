//Import Dependencies
import React from 'react'

//ReadMore Component
export default function ReadMore({ explanation, closeReadMore }) {
    return (
        <div className='container'>
            <p>{explanation}</p>
            <p>Read Less <button onClick={() => {closeReadMore()}}>-</button></p>
        </div>
    )
}