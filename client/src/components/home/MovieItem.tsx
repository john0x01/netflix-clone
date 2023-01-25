import './MovieItem.css'

interface MovieItemProps {
    movie: {
        title: string;
        overview: string;
        id: number;
        genre_ids: number[],
        poster_path: string
    }
}
export function MovieItem(props: MovieItemProps) {
    return (
        <div className="movie-thumbnail">
            <img src={`https://image.tmdb.org/t/p/w185/${props.movie.poster_path}`} alt={props.movie.title} />
        </div>
    )
}