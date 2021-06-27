import { getMoives } from './db'

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMoives( limit, rating ),
    }
}

export default resolvers