import { useContext } from 'react'
import { ClimaContext } from '../context/ClimaContext'

export const Clima = () => {
  const Kelvin = 273.15
  const urlImg = 'https://openweathermap.org/img/wn/'
  const {infoCity} = useContext(ClimaContext)
  return (
    <div>
      {
        infoCity && (
          <div>
            <h2>{infoCity.name + ', ' + infoCity.sys.country }</h2>
            <p>Temperatura: {(infoCity.main.temp - Kelvin).toFixed(0)} ॰C</p>
            <p>Descripcion meteorologica: {infoCity.weather[0].description}</p>
            <img src={`${urlImg}${infoCity.weather[0].icon}@2x.png`}/>
          </div>
        )
      }
    </div>
  )
}
