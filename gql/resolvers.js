import { groups, idols } from '../database';

let nextId = 69;

export const resolvers = {
  Query: {
    idols: () => idols,
    groups: () => groups,
    group: (root, { name }) =>
      groups.find(group => group.name === name)
  },
  Group: {
    idols: (root) =>
      idols.filter(idol => idol.group === root.id),
    since: (root, { unit = 'AD' }) =>
      unit === 'AD' ? root.since : root.since + 543
  },
  Mutation: {
    addIdol: (root, { name, group }) => {
      const idol = {
        id: nextId++,
        name,
        group,
        "team": "Trainee",
        "picture": "",
        "romaji": "cal",
        "nickname": "cal",
        "birthdate": "May 2, 1996",
        "birthplace": "Bangkok, Thailand",
        "bloodType": "B",
        "age": 21,
        "height": 160,
        "agency": "Ignite Records",
        "generation": "1st"
      }
      idols.push(idol);
      return idol;
    }
  },
  Idol: {
    group: (root) =>
      groups.find(group => group.id === root.group),
    height: (root, { unit = 'cm' }) => {
      return unit === 'cm' ? root.height : parseFloat((root.height / 30).toFixed(2))
    }
  }
}
