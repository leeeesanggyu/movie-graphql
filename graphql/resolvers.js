import { getMoives, getById, addMovie, deleteById } from './db'

const resolvers = {
    Query: {
        movies: (_, {}) => getMoives(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteById(id)
    }
}

export default resolvers