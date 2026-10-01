import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Courses } from './components/Courses'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <Header />
        <Hero />
        <Courses/>
        <Testimonials/>
        <Footer/>
      </>

    </>
  )
}

export default App
