//Import Dependencies
import React from 'react'
import styled from 'styled-components'
import logo from '../images/nasa-logo.svg'

//Styled Header Component
const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2%;

    div {
        display: flex;
        justify-content: space-between;

        nav {
        display: flex;
        justify-content: flex-end;
        width: 75%;
        align-items: center;

        a {
        background-color: ${pr => pr.theme.primaryColor};
        color: white;
        border-radius: 10px;
        text-decoration: none;
        font-weight: bold;
        margin: 0 2%;
        padding: 2%;
        transition: all 0.3s ease-in-out;

            &:visited {
            color: white;
                }

            &:hover {
            background-color: white;
            color: ${pr => pr.theme.primaryColor};
            border: 2px solid ${pr => pr.theme.primaryColor};
            transition: all 0.3s ease-in-out;
                }
            }
        }    
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
                    <a href='Subscribe'>SUBSCRIBE</a>
                </nav>
            </div>
            <h1>NASA Photo of the Day</h1>
        </StyledHeader>
    )
}