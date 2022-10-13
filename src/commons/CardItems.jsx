import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "../css/cardItem.css";
import { useState } from "react";
import { useEffect } from "react";

function CardItems({ movieOrTv, movieOrTvDetails }) {
  const [render, setRender] =useState(true)
  const userNoParse= localStorage.getItem("user")
  const user = JSON.parse(userNoParse)


  const handleFav = ()=>{
    axios.post(`http://localhost:3001/api/favoritos/agregarFavoritos/${user.id}`, {movieOrTv})
    setRender(!render)
  }
  const handleFavDelete= ()=>{
    axios.delete(`http://localhost:3001/api/favoritos/deleteFavorito/${user.id}`);
    setRender(!render)
  }
  return (
    <Box height="800px">
      
      <div className="contenedor">
        <figure className="figure">
          <Link to={`/${movieOrTvDetails}/${movieOrTv.id}`}>
            <img
              className="imgCss"
              alt="poster portada de pelicula"
              src={"https://image.tmdb.org/t/p/w400" + `${movieOrTv.poster_path}`}
            />
            <div className="capa">
              <h3>{movieOrTv.title? movieOrTv.title: movieOrTv.name}</h3>
              <p>{movieOrTv.overview}</p>
            </div>
          </Link>
        </figure>
      </div>
      <div className="boton" style={{marginTop:"25px"}}>
        {render? <Button onClick={handleFav} colorScheme="blue">Añadir a favoritos</Button>
        :
        <Button onClick={handleFavDelete} colorScheme="blue">Borrar de favoritos</Button>
        }
        
      </div>
    </Box>
  );
}

export default CardItems;
