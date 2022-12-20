import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'
import ResidentList from './components/ResidentList'
import LocationFilter from './components/LocationFilter'
import ErrorMessage from './components/ErrorMessage'


function App() {
  const [location, setLocation] = useState()
  const [locationName, setLocationName] = useState("")
  const [showError, setShowError] = useState(false)

  const getDataDimension = (idDimension) => {

    if(idDimension) {

      const URL = `https://rickandmortyapi.com/api/location/${idDimension}`
  axios.get(URL)
    .then (res => setLocation(res.data))
    .catch (err => {
      setShowError(true)
      setTimeout(() => {
          setShowError(false) 
      }, 2000)
      console.log(err)
    })
    } else {
      alert('Input a value')
    }
  }

  
  useEffect(() => {
    const randomDimension = getRandomNumber()
    getDataDimension(randomDimension)
  }, [])
  
  
  const handleSubmit = event  => {
    event.preventDefault()
    const dimensionSearch = event.target.searchValue.value
    getDataDimension(dimensionSearch)
  }
  
  const handleChangeInput = (event) => {
    setLocationName(event.target.value)
  }

  const getNewLocation = (URL, name) => {
    setLocationName(name)
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err) )
  }
  
  return (
    <div className="App">
      <header className='App_img'></header>
      <form onSubmit={handleSubmit}>
            <input id='searchValue' value={locationName} type="text" onChange={handleChangeInput} placeholder='search your dimension'/>
            <button type='submit'>Search</button>
            {
              showError ? <ErrorMessage/> : ""
            }
      </form>
      <LocationFilter locationName={locationName} getNewLocation={getNewLocation}/>  
      <LocationInfo location={location}/>
      <ResidentList location={location}/>
    </div>
  )
}

export default App
