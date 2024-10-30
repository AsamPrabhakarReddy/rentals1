
import React from 'react'
import NavBar from '../components/Navbar'
import RentalListing1 from '../components/RentalListing1'
import RentalListing2 from '../components/RentalListing2'
import RentalListing3 from '../components/RentalListing3'
import RentalListing4 from '../components/RentalListing4'
import RentalListing5 from '../components/RentalListing5'
import RentalListing6 from '../components/RentalListing6'
import RentalListing7 from '../components/RentalListing7'
import Testimonial from '../components/Testimonial'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
const RentalListing = () => {
  return (
    <div>
        <NavBar/>
        <RentalListing1/>
        <RentalListing2/>
        <RentalListing3/>
        <RentalListing4/>
        <RentalListing5/>
        <RentalListing6/>
        <RentalListing7/>
        <Testimonial/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default RentalListing