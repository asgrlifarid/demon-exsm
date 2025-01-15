import React from 'react'
import { Outlet } from "react-router"
import Footer from '../../pages/Client/ClientFooter'
import ClientHeader from '../../pages/Client/ClientHeader'

const ClientLayout = () => {
  return (
    <div>
        <ClientHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ClientLayout