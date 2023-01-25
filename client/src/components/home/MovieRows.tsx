import { MovieList } from '../home/MovieList'

export function MovieRows() {
    return (
        <>
            <MovieList title="Populares na Netflix" format="mixed" specify="popular" />
            <MovieList title="Em alta" format="mixed" specify="trending" />
            <MovieList title="Embarque na ação" format="movie" specify="genre/28" />
            <MovieList title="Filmes de terror" format="movie" specify="genre/27" />
            <MovieList title="Favoritos da crítica" format="movie" specify="top_rated" />
            <MovieList title="Séries aclamadas pela crítica" format="tv" specify="top_rated" />
            <MovieList title="Comédia" format="movie" specify="genre/35" />
            <MovieList title="Campeões de bilheteria" format="movie" specify="revenue" />
            
        </>
    )
}