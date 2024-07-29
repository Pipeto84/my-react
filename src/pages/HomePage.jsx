import reactLogo from './../assets/react.svg'
import '../styles/home/Home.css'

export const HomePage = () => {
  return (
    <div className='contenedorHome'>
      <a href="https://github.com/Pipeto84" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://github.com/Pipeto84" target="_blank" className='aTitulo'>
        <h1 className='h1Home'>React Pipeto84</h1>
      </a>
    </div>
  )
}
