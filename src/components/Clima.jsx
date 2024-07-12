import {useState, useContext} from 'react'
import { ClimaContext } from '../context/ClimaContext'

export const Clima = () => {
  const [datos, setDatos] = useState(null)

  const {infoCity} = useContext(ClimaContext)
  console.log(infoCity.name)
  return (
    <div>{infoCity.name}</div>
  )
}
