const axios = require('axios')
const cors = require('cors')
const { apiKey } = require('./.env')
const { baseApiUrl } = require('./global')

const app = require('express')()
app.use(cors())

const port = 4000


app.listen(port, () => {
    console.log(`Backend executando na porta ${port}...`)
})


// Populares na netflix (filmes)
app.get('/movie/popular/:page', (req, res) => {
    axios.get(`${baseApiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_watch_providers=8&watch_region=BR&language=pt-BR&page=${req.params.page}`)
        .then(response => res.send(response.data.results))
})
// Populares na netflix (séries)
app.get('/tv/popular/:page', (req, res) => {
    axios.get(`${baseApiUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_watch_providers=8&watch_region=BR&language=pt-BR&page=${req.params.page}`)
        .then(response => res.send(response.data.results))
})


// Em alta (filmes)
app.get('/movie/trending/:page', (req, res) => {
    axios.get(`${baseApiUrl}/discover/movie?api_key=${apiKey}&sort_by=trending.desc&with_watch_providers=8&watch_region=BR&language=pt-BR&page=${req.params.page}`)
        .then(response => res.send(response.data.results))
})
// Em alta (séries)
app.get('/tv/trending/:page', (req, res) => {
    axios.get(`${baseApiUrl}/discover/tv?api_key=${apiKey}&sort_by=trending.desc&with_watch_providers=8&watch_region=BR&language=pt-BR&page=${req.params.page}`)
        .then(response => res.send(response.data.results))
})



// Filmes por gênero
app.get('/movie/genre/:id/:page', (req, res) => {
    axios.get(`${baseApiUrl}/discover/movie?api_key=${apiKey}&with_genres=${req.params.id}&with_watch_providers=8&watch_region=BR&language=pt-BR&page=${req.params.page}`)
        .then(response => res.send(response.data.results))
})



// Favoritos da crítica
app.get('/movie/top_rated/:page', (req, res) => {
    axios.get(`${baseApiUrl}/discover/movie?api_key=${apiKey}&sort_by=vote_count.desc&with_watch_providers=8&watch_region=BR&language=pt-BR&page=${req.params.page}`)
        .then(response => res.send(response.data.results))
})

// Séries aclamadas pela crítica
app.get('/tv/top_rated/:page', (req, res) => {
    axios.get(`${baseApiUrl}/discover/tv?api_key=${apiKey}&sort_by=vote_count.desc&with_watch_providers=8&watch_region=BR&language=pt-BR&page=${req.params.page}`)
        .then(response => res.send(response.data.results))
})

// Campeões de bilheteria 
app.get('/movie/revenue/:page', (req, res) => {
    axios.get(`${baseApiUrl}/discover/movie?api_key=${apiKey}&sort_by=revenue.desc&with_watch_providers=8&watch_region=BR&language=pt-BR&page=${req.params.page}`)
        .then(response => res.send(response.data.results))
})
