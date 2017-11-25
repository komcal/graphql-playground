import { groups, idols } from '../database';

export const resolvers = {
  Query: {
    idols: () => idols,
    groups: () => groups,
    group: (root, { name }) =>
      groups.find(group => group.name === name)
  },
  Group: {
    idols: (root) =>
      idols.filter(idol => idol.group === root.id)
  },
  Idol: {
    group: (root) =>
      groups.find(group => group.id === root.group),
    height: (root, { unit = 'cm' }) => {
      return unit === 'cm' ? root.height : parseFloat((root.height / 30).toFixed(2))
    }
  }
}
