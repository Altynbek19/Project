import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import { useState } from 'react'
import { signInWithGoogle } from "./Firebase";
import {createContext, useEffect } from 'react'
export const ContextBox = createContext()


function App() {

  const [box, setBox] = useState([])
  useEffect(() => {
    if (box.length != 0)
      localStorage.setItem('box', JSON.stringify(box))
  }, [box])

  useEffect(() => {
    let basket = localStorage.getItem('box')? localStorage.getItem('box') : '[]'
    let parseBasket = JSON.parse(basket)
    setBox(parseBasket)
  }, [])

  console.log(box)

  return (
    <div className="App">
    <ContextBox.Provider value={[box, setBox]}>
      <RouterProvider
        router={router}
      />  
    </ContextBox.Provider>
    </div>
  )
}

export default App
