import { Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

function CardPerfil({ favoritos, setRender, render }) {

  const handleDelete = ()=>{
    axios.delete(`http://localhost:3001/api/favoritos/deleteFavorito/${favoritos.id}`);
    setRender(!render)
    
  }
  return (
    <div>
      <div className="detailsConteiner">
        <img
          className="movieImage"
          src={"https://image.tmdb.org/t/p/w400" + `${favoritos.poster}`}
          alt="poster pelicula"
        />
        <div className="movieDetails" style={{ color: "white" }}>
          <p>
            {" "}
            <strong>Titulo:</strong> {favoritos.tipo}
          </p>
          <p>
            <strong> Genero:</strong>{" "}
            {favoritos.genres
              ? favoritos.genres.map((genero) => genero.name).join(", ")
              : "aol"}{" "}
          </p>
          <p>
            {" "}
            <strong> Descripción:</strong> {favoritos.description}
          </p>
        </div>
      </div>
      <div className="contenedorBoton">
        <Button onClick={handleDelete} colorScheme="blue" className="boton">
          Borrar de favoritos
        </Button>
      </div>
    </div>
  );
}

export default CardPerfil;
