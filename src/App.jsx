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

//https://www.figma.com/file/lLuzeh6pQmPmQqKNJ18BFq/Aidina-Asta?type=design&node-id=0-1&mode=design&t=0pyuB2cbALtTpF5S-0

export default App
