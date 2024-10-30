import React from 'react'
import NavBar from '../components/Navbar'
import MaintenanceTracking1 from '../components/MaintenanceTracking1'
import MaintenanceTracking2 from '../components/MaintenanceTracking2'
import MaintenanceTracking3 from '../components/MaintenanceTracking3'
import MaintenanceTracking4 from '../components/MaintenanceTracking4'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
const MaintenanceTracking = () => {
  return (
    <div>
        <NavBar/>
        <MaintenanceTracking1/>
        <MaintenanceTracking2/>
        <MaintenanceTracking3/>
        <MaintenanceTracking4/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default MaintenanceTracking