import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
//d541a89a

const API_URL = 'http://omdbapi.com?apikey=d541a89a';

const movie1 = {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "imdbID": "tt1201607",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
}

const App = ()=>{

    const [movies,setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('harry')

    },[]);
    return(
        <div className="app">
            <h1>321Movies</h1>
            <div className="search">
                <input 
                placeholder="Search Your Movie"
                value={searchTerm}
                onChange={(e)=>{
                    setSearchTerm(e.target.value)
                }}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            
                {
                    movies?.length > 0
                    ?(
                        <div className="container">
                            {
                                movies.map((movie)=>(
                                    <MovieCard movie1={movie}/>
                                ))
                            }
                            
                        </div> 
                    ):(
                        <div className="empty">
                            <h2> No Movies</h2>

                        </div>
                    )
                }
              
        </div>
    );

}

export default App;