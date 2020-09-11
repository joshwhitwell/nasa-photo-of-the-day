//Import Dependencies
import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/nasa-logo.svg'

//Styled Header Component
const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2%;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

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
        transition: all 0.1s ease-in-out;

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

//Styled HamburgerHelper
const StyledHamburger = styled.p`
    margin-right: 2.5%;
    border-radius: 10px;
    width: 50px;
    font-size: 3rem;
    font-weight: bold;
    color: ${pr => pr.theme.primaryColor};
    border: 2px solid ${pr => pr.theme.primaryColor};
    transition: all 0.1s ease-in-out;

        &:hover {
            background-color: ${pr => pr.theme.tertiaryColor};
            color: white;
            transition: all 0.1s ease-in-out;
        }
`
//Styled HamburgerMenu
const StyledHamburgerMenu = styled.nav`
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;

        a {
        background-color: ${pr => pr.theme.primaryColor};
        color: white;
        border-radius: 10px;
        text-decoration: none;
        font-weight: bold;
        margin: 2%;
        padding: 2%;
        transition: all 0.1s ease-in-out;

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
`


//Header Component
export default function Header() {
    //Set Screen Width State
    const [width, setWidth] = useState('')
    //Set Hamburger State
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    // //Hamburger Helpers
    function hamburgerHelper() {
        !hamburgerOpen ? 
            setHamburgerOpen(true)
            : setHamburgerOpen(false)
    }

    window.addEventListener('resize', (event) => {
        setWidth(event.target.innerWidth)
      })
        
    return (
        <StyledHeader>
            <div>
                <img src={logo} alt='nasa logo' />
                {width > 500 ?
                    <nav>
                        <a href='https://www.nasa.gov/'>NASA</a>
                        <a href='Subscribe'>SUBSCRIBE</a>
                    </nav>
                    : <StyledHamburger onClick={hamburgerHelper}>=</StyledHamburger>
                }
            </div>
            {
            hamburgerOpen ? 
                <StyledHamburgerMenu>
                    <a href='https://www.nasa.gov/'>NASA</a>
                    <a href='Subscribe'>SUBSCRIBE</a>
                </StyledHamburgerMenu>
                : null
            }
            <h1>NASA Photo of the Day</h1>
        </StyledHeader>
    )
}