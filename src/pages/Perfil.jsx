import { Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../commons/Footer'
import NavBar from '../commons/NavBar'
import "../css/peliculasDetails.css"
import CardPerfil from '../commons/CardPerfil'

function Perfil() {
  const userNoParse=localStorage.getItem("user")
  const user = JSON.parse(userNoParse)
  const [favoritos, setFavoritos]= useState("")
  const[render, setRender] =useState(true)
  console.log(user);
  useEffect(()=>{
    axios.get(`http://localhost:3001/api/favoritos/getFavoritos/${user.id}`)
    .then(resultado => setFavoritos(resultado.data))
  },[render])

    
  return (
    <div>
      <NavBar/>
      <div className='mensajeBienvenida'>
        Bienvenido {user.name} !
      </div>
      {favoritos[0]?
      favoritos.map((favoritos)=>(  
        <CardPerfil setRender={setRender} user={user} render={render} favoritos={favoritos} />
))
  
  :
  <div className='noFav'>
    AUN NO HAY NADA EN FAVORITOS !
  </div>

  }

      <Footer/>
    </div>
  )
}

export default Perfil