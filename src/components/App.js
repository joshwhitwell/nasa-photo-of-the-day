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
  //Set State
  const [apod, setApod] = useState({})
  const [date, setDate] = useState('')

  //Axios Call on First Render of DOM
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

  return (
    <div className='App'>
      <Header />
      <div className='container'>
          <ImageBox apod={apod} date={date} setDate={setDate}/>
      </div>
    </div>
  )
}

export default App;
