import React, { useState } from 'react'
import ReadMore from './ReadMore'

export default function ImageBox(props) {
    const { apod, date, setDate } = props
    const [details, setDetails] = useState(true)

    function openReadMore() {
        setDetails(false)
    }

    function closeReadMore() {
        setDetails(true)
    }

    const onChange = (event) => {
        setDate(event.target.value)
    }

    return (
        <div className='container'>
            <form className="search-form">
                <input
                    type="text"
                    placeholder='YYYY-MM-DD'
                    onChange={onChange} // adding an onChange event handler and running our onChange function
                    value={date} // setting the value of our input equal to our searchTerm slice of state
                />
            </form>
            <h2>{apod.title}</h2>
            <img src={apod.url} alt={apod.title} />
            <p>©{apod.copyright} {apod.date}</p>
            {
                details ?
                    <p>Read More <button onClick={() => { openReadMore() }}>+</button></p>
                    : <ReadMore explanation={apod.explanation} closeReadMore={closeReadMore} />
            }
        </div>
    )
}