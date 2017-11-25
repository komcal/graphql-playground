import { groups, idols } from '../database';

export const resolvers = {
  Query: {
    idols: () => idols,
    groups: () => groups,
  }
}
