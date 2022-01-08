import React from 'react'
import { createUseStyles } from 'react-jss'

import Body from './Pages/Body'

function App() {
  const classes = styles()
  return (
    <div className={classes.container}>
      <Body />
    </div>
  )
}

const styles = createUseStyles({
  container: {
    padding: 5,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
})

export default App
