import {
  makeExecutableSchema
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
  enum HeightUnit {
    cm
    foot
  }
  enum YearUnit {
    AD
    BE
  }
  type Group {
    id: ID!
    name: String
    location: String
    since(unit: YearUnit): Int
    idols: [Idol]
  }
  type Idol {
    id: ID!
    team: String
    picture: String
    romaji: String
    name: String
    nickname: String
    birthdate: String
    birthplace: String
    bloodType: String
    age: Int
    height(unit: HeightUnit): Float
    agency: String
    generation: String
    group: Group
  }
  type Query {
    idols: [Idol]
    groups: [Group]
    group(name: String!): Group
    idol: Idol
  }
  type Mutation {
    addIdol(name: String, group: String): Idol
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
