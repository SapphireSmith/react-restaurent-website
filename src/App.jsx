import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import HeadLineCards from "./components/HeadLineCards"
import Food from "./components/Food"
import Category from './components/Category'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadLineCards />
      <Food/>
      <Category/>
    </div>
  )
}

export default App