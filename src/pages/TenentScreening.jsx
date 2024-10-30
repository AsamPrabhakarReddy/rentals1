import React from 'react'
import NavBar from '../components/Navbar'
import TenentScreening1 from '../components/TenentScreening1'
import TenentScreening2 from '../components/TenentScreening2'
import TenentScreening3 from '../components/TenentScreening3'
import TenentScreening4 from '../components/TenentScreening4'
import TenentScreening5 from '../components/TenentScreening5'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
const TenentScreening = () => {
  return (
        <div>
            <NavBar/>
            <TenentScreening1/>
            <TenentScreening2/>
            <TenentScreening3/>
            <TenentScreening4/>
            <TenentScreening5/>
            <ContactForm/>
            <Footer/>
        </div>
  )
}

export default TenentScreening