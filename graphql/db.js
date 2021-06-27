export let movies = [
    {
        id: 1,
        name: '어바웃타임',
        score: 100,
    },
    {
        id: 2,
        name: '업',
        score: 200,
    },
    {
        id: 3,
        name: '코코',
        score: 90,
    },
    {
        id: 4,
        name: '하트시그널',
        score: 1000,
    },
]

export const getMoives = () => movies

export const getById = id => {
    const foundMovie = movies.find(movie => id === movie.id)
    return foundMovie
}

export const deleteById = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id)
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies
        return true
    } else {
        return false
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie)
    return newMovie
}