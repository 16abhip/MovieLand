import './App.css'
import SearchIcon from './search.svg'
import { useEffect, useState }from "react";
import MovieCard from './MovieCard';
// c032e2d7
const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [serachTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Spiderman');
    }, [])
    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                placeholder='Search for movies'
                value= {serachTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt = "search"
                onClick={() => searchMovies(serachTerm)}
                />
            </div>
            {
                movies?.length > 0 
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie = {movie}/>
                        ))}
                    </div>
                ):
                (
                    <div className='empty'>
                        <h2>No movies Found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;