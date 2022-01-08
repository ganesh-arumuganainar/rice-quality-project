import React from 'react'
import { createUseStyles } from 'react-jss'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Content from '../components/Content'

function Body() {
  const classes = styles()

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.bodyContainer}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

const styles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '70%',
    minHeight: 600,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
})

export default Body
