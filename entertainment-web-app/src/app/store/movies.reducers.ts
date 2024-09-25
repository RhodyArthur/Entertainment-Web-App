// define shape of state
import {AppState} from "./appstate";
import {createReducer, on} from "@ngrx/store";
import {loadMovies, loadMoviesFailure, loadMoviesSuccess} from "./movies.actions";

// set initial state
export const initialState: AppState = {
    movies: [],
    error: null,
    searchItem: ''
}

// create reducer functions
export const moviesReducer = createReducer(
    // first takes the initial state
    initialState,

    // handle actions
    on(loadMovies, (state) => ({...state})),
    on(loadMoviesSuccess, (state, {movies}) => ({...state, movies: movies}) ),
    on(loadMoviesFailure, (state, {error}) => ({...state, error}))
)

