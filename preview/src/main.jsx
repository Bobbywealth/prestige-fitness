import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx'
import PersonalTraining from './PersonalTraining.jsx'
import Shop from './Shop.jsx'
import BMICalculator from './BMICalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
