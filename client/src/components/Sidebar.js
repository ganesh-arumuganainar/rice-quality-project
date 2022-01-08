import React from 'react'

import { createUseStyles } from 'react-jss'

function Sidebar() {
  const classes = styles()
  return (
    <div className={classes.container}>
      <p className={classes.containerText}>Sidebar</p>
    </div>
  )
}

const styles = createUseStyles({
  container: {
    minWidth: 300,
    minHeight: 600,
    width: '20%',
    display: 'flex',
    backgroundColor: '#FFEB7A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    textAlign: 'center',
  },
})

export default Sidebar
