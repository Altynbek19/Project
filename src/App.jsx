import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About_us from './components/content/About_us'
import Modal from './components/Modal'
import { useState } from 'react'
import { signInWithGoogle } from "./Firebase";

function App() {



  return (
    <div className="App">
      <Header />
      <RouterProvider
        router={router}
      />
      <Footer />
    </div>
  )
}

export default App
