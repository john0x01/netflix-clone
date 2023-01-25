import { useEffect, useState } from "react";
import { MovieItem } from './MovieItem'

import './MovieList.css'

interface Movie {
    title: string;
    overview: string;
    id: number;
    genre_ids: number[];
    poster_path: string;
}

interface MovieListProps {
    title: string;
    specify: string;
    format: 'movie' | 'tv' | 'mixed';
}

export function MovieList(props: MovieListProps) {
    const [movies, setMovies] = useState<Movie[]>([])
    const [tv, setTv] = useState<Movie[]>([])
    const [mixed, setMixed] = useState<Movie[]>([])

    async function setMoviesData() {
        await fetch(`http://localhost:4000/movie/${props.specify}/1`)
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch((err) => console.log(err))
    }

    async function setTvData() {
        await fetch(`http://localhost:4000/tv/${props.specify}/1`)
            .then(response => response.json())
            .then(data => setTv(data))
            .catch((err) => console.log(err))
    }

    function mixArrays() {
        let mixedArray = []
        for(let i in movies) {
            mixedArray.push(movies[i])
            mixedArray.push(tv[i])
        }
        setMixed(mixedArray)
    }

    useEffect(() => {
        setMoviesData();
        setTvData();
    }, [])

    useEffect(() => {
        mixArrays();
    }, [movies])

    
    
    console.log(mixed)

    return (
        <section className="movie-list">
            <h1>{props.title}</h1>

            <div className="movies">
                {
                    props.format === 'mixed' ? (mixed[2] ? (mixed.map((any, index) => {
                        return any != undefined ? <MovieItem key={`${index}${any.id}${any.poster_path}`} movie={any} /> : ''
                    })) : '') : (props.format === 'movie' ? (movies.map(movie => {
                        return <MovieItem key={movie.id} movie={movie} />
                    })) : (tv.map(tv => {
                        return  <MovieItem key={tv.id} movie={tv} />
                    })))
                }
            </div>
        </section>
    )  
}