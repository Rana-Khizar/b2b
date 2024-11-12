import React from 'react'
import Header from '../components/Homepage/Header'
import Footer from '../components/Homepage/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='main-content min-h-screen pt-5' >{children}</div>
            <Footer />
        </>
    )
}

export default Layout
    