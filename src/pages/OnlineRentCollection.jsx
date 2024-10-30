import React from 'react'
import NavBar from '../components/Navbar'
import OnlineRentCollection1 from '../components/OnlineRentCollection1'
import OnlineRentCollection2 from '../components/OnlineRentCollection2'
import OnlineRentCollection3 from '../components/OnlineRentCollection3'
import OnlineRentCollection4 from '../components/OnlineRentCollection4'
import OnlineRentCollectionFAQs from '../components/OnlineRentCollectionFAQs'
import RentalListing7 from '../components/RentalListing7'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
const OnlineRentCollection = () => {
  return (
    <div>
        <NavBar/>
        <OnlineRentCollection1/>
        <OnlineRentCollection2/>
        <OnlineRentCollection3/>
        <OnlineRentCollection4/>
        <OnlineRentCollectionFAQs/>
        <RentalListing7/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default OnlineRentCollection