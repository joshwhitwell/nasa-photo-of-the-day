import React from 'react'

export default function ImageBox(props) {
    return (
        <div className='container'>
            <h2>Title of Photo</h2>
            <img src='URL' alt='Title'/>
            <p>©Name</p>
        </div>
    )
}