import React from 'react'
import NavBar from '../components/Navbar'
import PropertyAccounting1 from '../components/PropertyAccounting1'
import PropertyAccounting2 from '../components/PropertyAccounting2'
import PropertyAccounting3 from '../components/PropertyAccounting3'
import PropertyAccounting4 from '../components/PropertyAccounting4'
import PropertyAccounting5 from '../components/PropertyAccounting5'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
const PropertyAccouting = () => {
  return (
    <div>
        <NavBar/>
        <PropertyAccounting1/>
        <PropertyAccounting2/>
        <PropertyAccounting3/>
        <PropertyAccounting4/>
        <PropertyAccounting5/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default PropertyAccouting