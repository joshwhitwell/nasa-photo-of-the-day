//Import Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import theme from './themes'
import './index.css'
import App from './components/App'

ReactDOM.render(
    <ThemeProvider theme={theme}><App /></ThemeProvider>,
    document.getElementById('root')
)
