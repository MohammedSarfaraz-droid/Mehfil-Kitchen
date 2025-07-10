import BackToTop from '@/components/BackToTop'
import CartPage from '@/components/CartPage'
import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <div>
            <Header />
            <CartPage />
            <Footer />
            <BackToTop />
        </div>
    )
}

export default page