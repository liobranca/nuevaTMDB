import { Spinner } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardItems from "../commons/CardItems";
import Footer from "../commons/Footer";
import NavBar from "../commons/NavBar";

function Search() {
  const { movieOrTv, search } = useParams();
  const [resultado, setResultado] = useState([]);
  console.log(movieOrTv + search);
  useEffect(() => {
    if (movieOrTv === undefined) {
      const movie = "movie";
      axios
        .get(`http://localhost:3001/api/movieOrSerie/search/${movie}/${search}`)
        .then((resul) => setResultado(resul.data));
    }
    axios
      .get(
        `http://localhost:3001/api/movieOrSerie/search/${movieOrTv}/${search}`
      )
      .then((resul) => setResultado(resul.data));
  }, []);
  console.log(resultado.results);
  return (
    <>
      <NavBar />
      {resultado.results ? (
        resultado.results.map((item, i) => (
          <CardItems
            key={i}
            movieOrTvDetails={movieOrTv}
            movieOrTv={item}
          ></CardItems>
        ))
      ) : (
        <div style={{ height: "3000px" }}>
          <div>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Search;
