import { SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardItems from "../commons/CardItems";
import Footer from "../commons/Footer";
import NavBar from "../commons/NavBar";
import { getAll } from "../state/peliculas";

function Tv() {
  const [tvs, setMoviesOrTv]=useState([])
  const dispatch= useDispatch()
  const movieOrTv= "tv"
  useEffect(()=>{
      dispatch(getAll({setMoviesOrTv,movieOrTv}))
  }, [])
  console.log(tvs);

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
        {tvs[0]
          ? tvs.map((tv, i) => (
              <CardItems key={i} movieOrTvDetails={movieOrTv} movieOrTv={tv}></CardItems>
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

export default Tv