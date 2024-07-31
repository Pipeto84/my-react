import { useContext } from 'react'
import { ClimaContext } from '../../context/ClimaContext'
import '../../styles/buscador/Clima.css'

export const Clima = () => {
  const Kelvin = 273.15
  const urlImg = 'https://openweathermap.org/img/wn/'
  const {infoCity} = useContext(ClimaContext)
  return (
    <div>
      {
        infoCity && (
          <div className='infoClima'>
            <h2>{infoCity.name + ', ' + infoCity.sys.country }</h2>
            <h5>Temperatura: {(infoCity.main.temp - Kelvin).toFixed(0)} ॰C</h5>
            <h5>Descripcion meteorologica: {infoCity.weather[0].description}</h5>
            <img src={`${urlImg}${infoCity.weather[0].icon}@2x.png`}/>
          </div>
        )
      }
    </div>
  )
}
