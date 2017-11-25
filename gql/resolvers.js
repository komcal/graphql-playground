import { groups, idols } from '../database';

export const resolvers = {
  Query: {
    idols: () => idols,
    groups: () => groups,
  },
  Group: {
    idols: (root) =>
      idols.filter(idol => idol.group === root.id)
  },
  Idol: {
    group: (root) =>
      groups.find(group => group.id === root.group)
  }
}
