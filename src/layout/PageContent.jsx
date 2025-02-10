import React, { Children } from 'react'

import Header from './Header'
import Footer from './Footer'

export default function PageContent ({children}) {
  return (
    <div>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}