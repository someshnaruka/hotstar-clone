import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Recommends:null,
    NewDisney:null,
    originals:null,
    trending:null,

};

const movieSlice=createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.Recommends=action.payload.recommend;
            state.NewDisney=action.payload.NewDisney;
            state.Originals=action.payload.original;
            state.Trending=action.payload.trending;
            console.log(state.originals,"state.movie");
        },
    },
});


export const {setMovies}=movieSlice.actions;

export const selectRecommend=(state) => state.movie.Recommends;
export const selectNewDisney=(state) => state.movie.NewDisney;
export const selectoriginals=(state) => state.movie.Originals;
export const selectTrending=(state) => state.movie.Trending;


export default movieSlice.reducer;

