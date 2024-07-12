import {useState, useContext} from 'react'
import { ClimaContext } from '../context/ClimaContext'

export const Clima = () => {
  const [datos, setDatos] = useState(null)
  const Kelvin = 273.15

  const {infoCity} = useContext(ClimaContext)
  console.log(infoCity.name)
  return (
    <div>
      <h2>{infoCity.name}, {infoCity.sys.country}</h2>
      <p>Temperatura: {(infoCity.main.temp - Kelvin).toFixed(2)} ॰C</p>
    </div>
  )
}
