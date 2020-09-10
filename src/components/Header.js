//Import React
import React from 'react'

//Header Component
export default function Header() {
    return (
        <div className='container'>
            <h1>NASA Photo of the Day</h1>
            <nav>
                <a href='https://www.nasa.gov/'>Visit NASA</a>
                <a href='Subscribe'>Subscribe</a>
            </nav>
        </div>
    )
}