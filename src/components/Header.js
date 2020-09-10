//Import Dependencies
import React from 'react'
import styled from 'styled-components'
import logo from '../images/nasa-logo.svg'

//Styled Header Component
const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        display: flex;
        justify-content: space-between;

        nav {
        display: flex;
        width: 30%;
        justify-content: center;
        align-items: center;
        border: 1px solid black;

        a {
        background-color: ${pr => pr.theme.primaryColor};
        color: white;
        border: 1px solid black;
        text-decoration: none;
        margin: 0 5%;
        padding: 3%;

            &:visited {
            color: white;
                }

            &:hover {
            background-color: white;
            color: ${pr => pr.theme.primaryColor};
                }
            }
        }    
    }

    h1 {
        border: 1px solid black;
        text-align: center;
    }
`

//Header Component
export default function Header() {
    return (
        <StyledHeader>
            <div>
                <img src={logo} alt='nasa logo' />
                <nav>
                    <a href='https://www.nasa.gov/'>NASA</a>
                    <a href='Subscribe'>Subscribe</a>
                </nav>
            </div>
            <h1>NASA Photo of the Day</h1>
        </StyledHeader>
    )
}