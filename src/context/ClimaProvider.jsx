import {useState} from 'react'
import {ClimaContext} from './ClimaContext'


export const ClimaProvider = ({children}) => {
  const urlBasic = 'https://api.openweathermap.org/data/2.5/weather?'
  const API_KEY = '747159ad5510f324c5f01542f5cdf40c'
  
  const [infoCity, setInfoCity] = useState('')

  const fetchClima = async (city) => {
    try {
      const responde = await fetch(`${urlBasic}q=${city}&appid=${API_KEY}&lang=es`)
      const data = await responde.json()
      setInfoCity(data)
    } catch (error) {
      console.error('el error es: ',error)
    }
  }
  return (
    <ClimaContext.Provider value={{fetchClima,infoCity}}>
      {children}
    </ClimaContext.Provider>
  )
}
