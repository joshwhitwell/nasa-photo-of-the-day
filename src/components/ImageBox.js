import React from 'react'

export default function ImageBox(props) {
    const { apod } = props
    console.log(apod)
    return (
        <div className='container'>
            <h2>{apod.title}</h2>
            <img src={apod.url} alt={apod.title}/>
            <p>©{apod.copyright}</p>
        </div>
    )
}