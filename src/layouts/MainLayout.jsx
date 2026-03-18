import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/NavBar'

function MainLayout() {
    return (
        <>
            <Navbar />
            <div className=' md:px-10'>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout