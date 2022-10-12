import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk("GET_ALL", async ({setMoviesOrTv, movieOrTv}) => {
  
  try{
      const result= await axios.get(`http://localhost:3001/api/movieOrSerie/${movieOrTv}`)
      return setMoviesOrTv(result.data)
      }
        
  catch{

  }
    }
  )

  const peliculasReducer = createReducer(
    {},
    {
      [getAll.fulfilled]: (state, action) => action.payload,
    }
  );
  
  export default peliculasReducer;