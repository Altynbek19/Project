import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import Header from './components/header/Header'
import Header_white from './components/header/Header_white'
import Footer from './components/footer/Footer'
import Product from './components/catalog/product'
import About_us from './components/content/About_us'
import Modal from './components/Modal'
import { useState } from 'react'
import { signInWithGoogle } from "./Firebase";

function App() {



  return (
    <div className="App">
      {/* <Header />
      <RouterProvider
        router={router}
      />
      <Footer /> */}
      <Header_white />
      <Product />
      <Footer />
    </div>
  )
}

export default App
