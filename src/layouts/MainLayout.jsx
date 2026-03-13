import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/NavBar'

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout