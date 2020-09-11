//Import Dependencies
import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Import Styles
import '../App.css'

//Import Components
import ImageBox from './ImageBox'
import Header from './Header'
import { BASE_URL, API_KEY } from '../constants/index.js'

//App Component
function App() {
  //Set State to Hold Axios Data Call
  const [apod, setApod] = useState({})
  //Set State to Hold Search Bar Value
  const [date, setDate] = useState('')

  //Axios Call on First Render and Date Change
  //Base URL and API Key imported from constants/index.js
  //Date supplied from State set from Input Field in ImageBox.js
  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
        .then(response => {
          setApod(response.data)
        })
        .catch(error => {
          console.log(error)
        })
  }, [ date ])

  //Returns Header Component and ImageBox Component
  return (
    <div className='App'>
      <Header />
      <div className='container'>
          <ImageBox apod={apod} setDate={setDate}/>
      </div>
    </div>
  )
}

export default App;
