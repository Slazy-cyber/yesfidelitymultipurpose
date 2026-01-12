import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroPage from './pages/HeroPage.jsx'
import Cleaning from './pages/Cleaning.jsx'
import Recycling from './pages/Recycling.jsx'
import Enquiry from './pages/Enquiry.jsx'
import Agricultural from './pages/Agricultural.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <Router>

      <Routes>  
        <Route path="/" element={<HeroPage />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/recycling" element={<Recycling />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/agricultural" element={<Agricultural />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App