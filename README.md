# Netflix Clone

Netflix's UI re-creation project

## Technologies
<ul>
  <li> ReactJS </li>
  <li> Express </li>
  <li> The Movie Database API </li>
</ul>

## Project progress


First, I started configurating express routes to the API in the ```server/index.js``` file.
```
app.get('/movie/popular/:page', (req, res) => {
    axios.get(`${baseApiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_watch_providers=8&watch_region=BR&language=pt-BR&page=${req.params.page}`)
        .then(response => res.send(response.data.results))
})
```
After reading the API's documentation, I was able to understand how the requests work and I started requesting the info I needed to build a Netlix clone,
such as popular movies (and tv series) avaiable on Netflix in my region (Brazil)<br><br>

Then, I started developing the React components responsible for displaying the movies lists. <br>
I set an inteface from typescript to specify which info I wanted from the API's response.

```
interface Movie {
    title: string;
    overview: string;
    id: number;
    genre_ids: number[];
    poster_path: string;
}
```
Using React's Hook, I could fetch the backend route's url and store the response to variables. I did this both to movies and tv series.

```
const [movies, setMovies] = useState<Movie[]>([])
const [tv, setTv] = useState<Movie[]>([])

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
```

Now I was able to map the arrays and display the thumbnails using the ```MovieItem.tsx``` component

```
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
```

```
    return (
        <section className="movie-list">
            <h1>{props.title}</h1>

            <div className="movies">
                {movies.map(movie => {
                    return <MovieItem key={movie.id} movie={movie} />
                }
            </div>
        </section>
    )

```

But since Netflix doesn't feature only movies in the 'Popular' section, I had to write a function that mixes both arrays (Movies and TV)

```
const [mixed, setMixed] = useState<Movie[]>([])

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
```

Now the result was like this:
![image](https://user-images.githubusercontent.com/78546581/214465722-28856b0d-9587-4438-93d0-610d1471ecb1.png)

After the component MovieRow was complete, I added more rows with differents categories/lists similar to Netflix ones
![image](https://user-images.githubusercontent.com/78546581/214468429-1f65b123-d16d-4d62-a919-c0e5151f4ea0.png)

The next step was to build the Navbar
![image](https://user-images.githubusercontent.com/78546581/214468583-568d449e-5098-4898-b50c-e2994f7a582f.png)
***[UNDER DEVELOPMENT]****

