import React from 'react'
import { useParams } from 'react-router-dom'

const WordColors = (props) => {

  let {word, color1, color2} = useParams()

  let styles = {
    color: color1,
    backgroundColor: color2
  }

  return (
    <h1 style={styles}>The word is: {word}</h1>
  )
}

export default WordColors