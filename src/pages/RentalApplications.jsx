
import React from 'react'
import NavBar from '../components/Navbar'
import RentalApplications1 from '../components/RentalApplications1'
import RentalApplications2 from '../components/RentalApplications2'
import RentalApplications3 from '../components/RentalApplications3'
import RentalApplications4 from '../components/RentalApplications4'
import RentalApplications5 from '../components/RentalApplications5'
import RentalApplications6 from '../components/RentalApplications6'
import RentalApplications7 from '../components/RentalApplications7'
import RentalApplications8 from '../components/RentalApplications8'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const RentalApplications = () => {
  return (
    <div>
        <NavBar/>
        <RentalApplications1/>
        <RentalApplications2/>
        <RentalApplications3/>
        <RentalApplications4/>
        <RentalApplications5/>
        <RentalApplications6/>
        <RentalApplications7/>
        <RentalApplications8/>
        <FAQ/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default RentalApplications