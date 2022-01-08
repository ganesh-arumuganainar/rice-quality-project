import React from 'react'

import { createUseStyles } from 'react-jss'

function Footer() {
  const classes = styles()
  return (
    <div className={classes.container}>
      <p className={classes.containerText}>Footer</p>
    </div>
  )
}

const styles = createUseStyles({
  container: {
    minHeight: 200,
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA343',
  },
  containerText: {
    textAlign: 'center',
  },
})

export default Footer
