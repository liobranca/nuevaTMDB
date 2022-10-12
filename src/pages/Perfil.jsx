import { Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../commons/Footer'
import NavBar from '../commons/NavBar'
import "../css/peliculasDetails.css"

function Perfil() {
  const userNoParse=localStorage.getItem("user")
  const user = JSON.parse(userNoParse)
  const [favoritos, setFavoritos]= useState("")
  console.log(user);
  useEffect(()=>{
    axios.get(`http://localhost:3001/api/favoritos/getFavoritos/${user.id}`)
    .then(resultado => setFavoritos(resultado.data))
  },[])
    
  return (
    <div>
      <NavBar/>
      <div className='mensajeBienvenida'>
        Bienvenido {user.name} !
      </div>
      {favoritos[0]?
      favoritos.map((favoritos)=>(  
          <div>
       <div className="detailsConteiner">
        <img className="movieImage" src={"https://image.tmdb.org/t/p/w400" + `${favoritos.poster}`} alt="poster pelicula" />
        <div className="movieDetails" style={{color: "white"}}>
        <p> <strong>Titulo:</strong> {favoritos.tipo}</p>
        <p><strong> Genero:</strong> {favoritos.genres? favoritos.genres.map((genero)=> genero.name).join(", "): "aol"} </p>
        <p> <strong> Descripción:</strong> {favoritos.description}</p>
        </div>
       
       </div>  
       <div className="contenedorBoton"><Button colorScheme='blue' className="boton" >Agreagar a favoritos</Button></div>
        
  </div>))
  
  :
  <div>
    AUN NO HAY NADA EN FAVORITOS !
  </div>

  }

      <Footer/>
    </div>
  )
}

export default Perfil