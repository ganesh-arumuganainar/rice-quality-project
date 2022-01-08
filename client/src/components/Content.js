import React from 'react'

import { createUseStyles } from 'react-jss'

function Content() {
  const classes = styles()
  return (
    <div className={classes.container}>
      <p className={classes.containerText}>This is where the content goes</p>
    </div>
  )
}
const styles = createUseStyles({
  container: {
    minWidth: 700,
    minHeight: 600,
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9BD0C7',
  },
  containerText: {
    textAlign: 'center',
  },
})

export default Content
