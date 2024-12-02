import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Member from './components/Member.jsx'
import Events from './components/Events.jsx'
import Collection from './components/Collection.jsx'
import Visitor from './components/Visitor.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Member />
      <Events />
      <Collection />
      <Visitor />
      <Footer />
    </div>
  )
}

export default App