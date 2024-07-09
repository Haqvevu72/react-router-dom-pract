import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './pages/about-us'
import ContactUs from './pages/contact-us'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="aboutus" element={<AboutUs/>}></Route>
        <Route path="contactus" element={<ContactUs/>}></Route>
      </Routes>
    </>
  )
}

export default App
