import { SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardItems from "../commons/CardItems";
import Footer from "../commons/Footer";
import NavBar from "../commons/NavBar";
import { getAll } from "../state/peliculas";

function Peliculas() {
  const [movies, setMoviesOrTv] = useState([]);
  const dispatch = useDispatch();
  const movieOrTv = "movie";
  useEffect(() => {
    dispatch(getAll({ setMoviesOrTv, movieOrTv }));
  }, []);
  console.log(movies);
  return (
    <div>
       
      <NavBar></NavBar>
   
      <SimpleGrid
        style={{marginTop:"25px"}}
        columns={[2, null, 3]}
        spacingX="50px"
        spacingY="30px"
        minChildWidth="500px"
      >
        {movies[0]
          ? movies.map((movie, i) => (
              <CardItems key={i} movieOrTv={movie}></CardItems>
            ))

          : <div style={{height:"3000px"}}> 
          <div>
          <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'/>
          </div>
          </div>}
      </SimpleGrid>
      <Footer/>
    </div>
  );
}

export default Peliculas;
