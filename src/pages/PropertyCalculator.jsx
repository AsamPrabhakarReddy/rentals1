import React from 'react'
import NavBar from '../components/Navbar'
import PropertyCalculator1 from '../components/PropertyCalculator1'
import PropertyCalculator2 from '../components/PropertyCalculator2'
import PropertyCalculator3 from '../components/PropertyCalculator3'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
const PropertyCalculator = () => {
  return (
    <div>
        <NavBar/>
        <PropertyCalculator1/>
        <PropertyCalculator2/>
        <PropertyCalculator3/>
    </div>
  )
}

export default PropertyCalculator