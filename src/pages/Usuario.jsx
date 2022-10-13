import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../commons/Footer";
import NavBar from "../commons/NavBar";

function Usuario() {
  const [favoritos, setFavoritos]= useState([])
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/users/userDetails/${id}`)
        .then(resultado => setFavoritos(resultado.data))

    },[])
    console.log(favoritos);
  return (
    <div>
      <NavBar />
      {favoritos[0]? favoritos.map((fav)=>(
    <div style={{marginBottom:"300px"}}>
    <div className="detailsConteiner">
     <img className="movieImage" src={"https://image.tmdb.org/t/p/w400" + `${fav.poster}`} alt="poster pelicula" />
     <div className="movieDetails" style={{color: "white"}}>
     <p> <strong>Titulo:</strong> {fav.tipo}</p>
     <p> <strong> Descripción:</strong> {fav.description}</p>
     </div>
    
    </div>  
    
     
</div>
      )):
      ""}

  
      <Footer />
    </div>
  );
}

export default Usuario;
