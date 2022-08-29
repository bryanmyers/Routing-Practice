import React from 'react'
import { useParams } from 'react-router-dom'

const Word = (props) => {

  let { variable } = useParams()

  return (
    isNaN(variable) ? <h1>Word of the day is: {variable}</h1> : <h1>Your lucky nunber is: {variable}</h1>
  )
}

export default Word