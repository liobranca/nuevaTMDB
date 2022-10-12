import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carrousel({ prop }) {
  console.log(prop);
  return (
    <div>
      <Box w="1000px" p={4} color="white" m="auto">
        <Carousel infiniteLoop autoPlay interval="5000" transitionTime="2000">
          {prop.map((slide) => {
            return (
              <>
                <Image
                  src={
                    "https://image.tmdb.org/t/p/w500" + `${slide.backdrop_path}`
                  }
                  height="500px"
                  width="200px"
                />
                <p style={{ height:"40px", fontSize:"50px", position:"absolute"}}>
                  {slide.title}
                </p>
              </>
            );
          })}
        </Carousel>
      </Box>
    </div>
  );
}

export default Carrousel;
