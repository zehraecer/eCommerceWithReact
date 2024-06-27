import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GetProducts } from './components/api'
import { Header } from './components/header'
import { Outlet } from 'react-router-dom'

export const userContext = createContext()

function App() {
  const [data, setData] = useState([])

  // GetProducts.get(``).then((result) => setData(result))

  return (
    <userContext.Provider value={{ data, setData }}>

      <div className="container">

        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  )
}

export default App
