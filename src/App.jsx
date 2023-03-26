import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import Header from './components/header/Header'
import Product from './components/catalog/Product'
import About_us from './components/content/About_us'
import Modal from './components/Modal'
import { useState } from 'react'
import { signInWithGoogle } from "./Firebase";


function App() {

  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App
