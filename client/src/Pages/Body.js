import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { createUseStyles } from 'react-jss'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Content from '../components/Content'

const baseURL = 'http://127.0.0.1:8000/'

function Body() {
  const classes = styles()
  const [dataReturned, setDataReturned] = useState()

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      //console.log(res.data)
      setDataReturned(res.data)
      console.log(dataReturned)
    })
  }, [])

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.bodyContainer}>
        <Sidebar />
        <Content example={dataReturned} />
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
