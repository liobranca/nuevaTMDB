import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../state/peliculas'

function Content() {
    const[movierOrTv, setMovierOrTv]= useState([])
    const dispatch = useDispatch()
    
    
  return (
    <div></div>
  )
}

export default Content