//Import Dependencies
import React, { useState } from 'react'

//Import Components
import ReadMore from './ReadMore'

//ImageBox Component
export default function ImageBox(props) {
    //Receives apod date and setDate from App
    const { apod, date, setDate } = props
    //Set Details State to Hold ReadMore Component
    const [details, setDetails] = useState(true)
    const [inputValue, setInputValue] = useState('')

    //ReadMore Helper Functions
    function openReadMore() {
        setDetails(false)
    }

    function closeReadMore() {
        setDetails(true)
    }

    //Input Field Event Handler
    const onChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        setDate(inputValue)
        setInputValue('')
    }


    //Return ImageBox Component
    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <label for='date'>Change Date: </label>
                <input
                    type="text"
                    placeholder='YYYY-MM-DD'
                    onChange={onChange} //Sets date slice to input
                    value={inputValue}//Sets input field value to date slice
                />
            </form>
            <h2>Photo on {apod.date}: {apod.title}</h2>
            <img src={apod.url} alt={apod.title} />
            {apod.copyright ? <p>©{apod.copyright}</p> : <p>© NASA</p>}
            {//On Click Sets Details to False and Renders ReadMore Component
                details ?
                    <p>Read More <button onClick={() => { openReadMore() }}>+</button></p>
                    : <ReadMore explanation={apod.explanation} closeReadMore={closeReadMore} />
            }
        </div>
    )
}