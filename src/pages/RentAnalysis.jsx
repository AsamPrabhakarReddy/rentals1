import React from 'react'
import Navbar from "../components/Navbar"
import RentAnalysis1 from '../components/RentAnalysis1'
import RentAnalysis2 from '../components/RentAnalysis2'
import RentAnalysis3 from '../components/RentAnalysis3'
import RentAnalysis4 from '../components/RentAnalysis4'
import RentAnalysis5 from '../components/RentAnalysis5'
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const RentAnalysis = () => {
  return (
    <div>
        <Navbar/>
        <RentAnalysis1/>
        <RentAnalysis2/>
        <RentAnalysis3/>
        <RentAnalysis4/>
        <RentAnalysis5/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default RentAnalysis