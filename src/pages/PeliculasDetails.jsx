import { Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../commons/Footer";
import NavBar from "../commons/NavBar";
import "../css/peliculasDetails.css"

function PeliculasDetails() {
    const[pelicula, setPelicula]=useState("")
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/movieOrSerie/details/movie/${id}`)
        .then(result => setPelicula(result.data))
    },[])
    console.log(pelicula);
  return <>
    <NavBar/>
    <div>
       <div className="detailsConteiner">
        <img className="movieImage" src={"https://image.tmdb.org/t/p/w400" + `${pelicula.poster_path}`} alt="poster pelicula" />
        <div className="movieDetails" style={{color: "white"}}>
        <p> <strong>Titulo:</strong> {pelicula.title}</p>
        <p><strong> Genero:</strong> {pelicula.genres? pelicula.genres.map((genero)=> genero.name).join(", "): "aol"} </p>
        <p> <strong> Descripción:</strong> {pelicula.overview}</p>
        </div>
       
       </div>  
       <div className="contenedorBoton"><Button colorScheme='blue' className="boton" >Agreagar a favoritos</Button></div>
        
  </div>
  <Footer/>

  </>;
}

export default PeliculasDetails;
