import React, { useState } from 'react'
import ReadMore from './ReadMore'

export default function ImageBox(props) {
    const { apod } = props
    const [details, setDetails] = useState(true)

    function openReadMore() {
        setDetails(false)
    }

    function closeReadMore() {
        setDetails(true)
    }

    return (
        <div className='container'>
            <h2>{apod.title}</h2>
            <img src={apod.url} alt={apod.title}/>
            <p>©{apod.copyright} {apod.date}</p>
            {
            details ? 
            <p>Read More <button onClick={() => {openReadMore()}}>+</button></p> 
            : <ReadMore explanation={apod.explanation} closeReadMore={closeReadMore}/>
            }
        </div>
    )
}