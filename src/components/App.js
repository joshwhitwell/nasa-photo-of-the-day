//Imports
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import ImageBox from './ImageBox'
import { BASE_URL, API_KEY } from '../constants/index.js'

//App Component
function App() {
  //Set State
  const [apod, setApod] = useState({})

  //Axios Call on First Render of DOM
  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(response => {
          setApod(response.data)
        })
        .catch(error => {
          console.log(error)
        })
  }, [])

  return (
    <div className='App'>
      <h1>NASA Photo of the Day</h1>
      <div className='container'>
        {
          <ImageBox apod={apod}/>
        }
      </div>
    </div>
  )
}

export default App;
