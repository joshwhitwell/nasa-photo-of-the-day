//Import Dependencies
import React, { useState } from 'react'
import styled from 'styled-components'

//Import Components
import ReadMore from './ReadMore'

//Styled ImageBox Component
const StyledImageBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5% 5%;
    margin: 2.5%;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 10px;

    form, img, h2, p {
        margin-bottom: 2.5%;
    }

    img {
        border-radius: 8px;
    }

    input {
        border-color: ${pr => pr.theme.primaryColor};
        border-radius: 10px;
        outline: none;
    }

    button {
        border-color: ${pr => pr.theme.primaryColor};
        width: 25px;
        border-radius: 8px;
        font-weight: bold;
        background-color: white;
        color: ${pr => pr.theme.primaryColor};
        transition: all 0.1s ease-in-out;

        &:hover {
            background-color: ${pr => pr.theme.tertiaryColor};
            color: white;
            transition: all 0.1s ease-in-out;
        }
    }
`

//ImageBox Component
export default function ImageBox(props) {
    //Receives apod date and setDate from App
    const { apod, setDate } = props
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

    //On Enter sets the input value to state; resets input value
    const onSubmit = (event) => {
        event.preventDefault()
        setDate(inputValue)
        setInputValue('')
    }


    //Return ImageBox Component
    return (
        <StyledImageBox>
            <form onSubmit={onSubmit}>
                <label>Change Date: </label>
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
        </StyledImageBox>
    )
}