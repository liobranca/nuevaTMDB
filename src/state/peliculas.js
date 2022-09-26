import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
    "GET_ALL",
    async (movieOrTv) => {
      try {
        const res = await axios.get(`http://localhost:3001/api/movieOrSerie/${movieOrTv}`);
        console.log(res);
        return res;
      } catch (err) {
        return err.message;
      }
    }
  )

  const productReducer = createReducer(
    {},
    {
      [getAll.fulfilled]: (state, action) => action.payload,
    }
  );
  
  export default productReducer;