import React from 'react'

import { createUseStyles } from 'react-jss'

function Header() {
  const classes = styles()
  return (
    <div className={classes.container}>
      <p className={classes.containerText}>This is a header</p>
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

export default Header
