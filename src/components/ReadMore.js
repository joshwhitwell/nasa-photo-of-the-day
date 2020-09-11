//Import Dependencies
import React from 'react'
import styled from 'styled-components'

//Styled ReadMore
const StyledReadMore = styled.div`
    border: 1px solid ${pr => pr.theme.primaryColor};
    padding: 2.5%;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 10px;
`

//ReadMore Component
export default function ReadMore({ explanation, closeReadMore }) {
    return (
        <StyledReadMore>
            <p>{explanation}</p>
            <p>Read Less <button onClick={() => {closeReadMore()}}>-</button></p>
        </StyledReadMore>
    )
}