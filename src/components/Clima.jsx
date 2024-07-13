import {useState, useContext} from 'react'
import { ClimaContext } from '../context/ClimaContext'



export const Clima = () => {
  const [datos, setDatos] = useState(null)
  const Kelvin = 273.15
  const {infoCity} = useContext(ClimaContext)
  console.log(infoCity)
  return (
    <div>
      {
        infoCity && (
          <div>
            <h2>{infoCity.name + ', ' + infoCity.sys.country }</h2>
            <p>Temperatura: {(infoCity.main.temp - Kelvin).toFixed(0)} ॰C</p>
            <p>Descripcin meteorologica: {infoCity.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${infoCity.weather[0].icon}@2x.png`}/>
          </div>
        )
      }
    </div>
  )
}
