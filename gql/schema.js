import {
  makeExecutableSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
  type Group {
    id: ID!
    name: String
    location: String
    since: Int
  }
  type Idol {
    id: ID!,
    group: String,
    team: String,
    picture: String,
    romaji: String,
    name: String,
    nickname: String,
    birthdate: String,
    birthplace: String,
    bloodType: String,
    age: Int,
    height: Float,
    agency: String,
    generation: String
  }
  type Query {
    idols: [Idol]
    groups: [Group]
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
