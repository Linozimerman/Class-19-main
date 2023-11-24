import { useState } from 'react';

import moviesData from '../movies-data.json';
import Movies from './Movies';


function MoviesList3(props) {
    const [movies, setMovies] = useState(moviesData);

    return (
        <div>
            {
                moviesData.map((eachMovie, index) => {
                    return (
                        <div key="App">
                            <Movies key={index} eachMovie={eachMovie} />
                        </div>
                    )
                })
            }
        </div>
    )


}

export default MoviesList3;