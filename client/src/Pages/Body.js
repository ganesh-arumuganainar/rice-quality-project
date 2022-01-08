import React from 'react'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Content from '../components/Content'

function Body() {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default Body
