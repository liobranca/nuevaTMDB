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
    const {id, movieOrTvDetails} = useParams()
    const userNoParse= localStorage.getItem("user")
    const user = JSON.parse(userNoParse)
  
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/movieOrSerie/details/${movieOrTvDetails}/${id}`)
        .then(result => setPelicula(result.data))
    },[])
    const handleFav = ()=>{
      axios.post(`http://localhost:3001/api/favoritos/agregarFavoritos/${user.id}`, {pelicula})
    }
    console.log(pelicula);
  return <>
    <NavBar/>
    <div style={{marginBottom:"300px"}}>
       <div className="detailsConteiner">
        <img className="movieImage" src={"https://image.tmdb.org/t/p/w400" + `${pelicula.poster_path}`} alt="poster pelicula" />
        <div className="movieDetails" style={{color: "white"}}>
        <p> <strong>Titulo:</strong> {pelicula.title}</p>
        <p><strong> Genero:</strong> {pelicula.genres? pelicula.genres.map((genero)=> genero.name).join(", "): "aol"} </p>
        <p> <strong> Descripción:</strong> {pelicula.overview}</p>
        </div>
       
       </div>  
     
        
  </div>
  <Footer/>

  </>;
}

export default PeliculasDetails;
