import React from 'react'

import { createUseStyles } from 'react-jss'

function Content(props) {
  const classes = styles()
  return (
    <div className={classes.container}>
      <p className={classes.containerText}>{props.example.Slender}</p>
      <p className={classes.containerText}>{props.example.Medium}</p>
      <p className={classes.containerText}>{props.example.Bold}</p>
      <p className={classes.containerText}>{props.example.Round}</p>
      <p className={classes.containerText}>{props.example[4]}</p>
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
