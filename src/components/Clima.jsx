import {useState, useContext} from 'react'
import { ClimaContext } from '../context/ClimaContext'



export const fetchClima = async (city) => {
  const [infoCity, setInfoCity] = useState('')
  const urlBasic = 'https://api.openweathermap.org/data/2.5/weather?'
  const API_KEY = '747159ad5510f324c5f01542f5cdf40c'
  try {
    const responde = await fetch(`${urlBasic}q=${city}&appid=${API_KEY}`)
    const data = await responde.json()
    setInfoCity(data)
    // console.log(data)
  } catch (error) {
    console.error('el error es: ',error)
  }
  // return infoCity
}


export const Clima = (infoCity) => {
  const [datos, setDatos] = useState(null)
  const Kelvin = 273.15
  // const {infoCity} = useContext(ClimaContext)
  // console.log(infoCity)
  return (
    <div>
      {/* <h2>{infoCity.name + ', ' + infoCity.sys.country }</h2>
      <p>Temperatura: {(infoCity.main.temp - Kelvin).toFixed(2)} ॰C</p>
      <p>Descripcion meteorologica: {infoCity.weather[0].description}</p> */}
    </div>
  )
}
