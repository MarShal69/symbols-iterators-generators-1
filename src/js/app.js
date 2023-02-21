/* eslint-disable no-undef */
export default class Team {
  // class Team {
  constructor(characterAll) {
    this.characterAll = characterAll;
  }

  [Symbol.iterator]() {
    let index = 0;
    const { length } = this.characterAll;
    return {
      next() {
        if (index >= length) {
          return {
            done: true,
            value: undefined,
          };
        }

        index += 1;
        return {
          done: false,
          // eslint-disable-next-line no-use-before-define
          value: characterAll[index - 1],
        };
      },
    };
  }
}

// const characterAll = [];
// characterAll.push(new Character('Лучник', 'Bowman', 50, 1, 40, 10));
// characterAll.push(new Character('Мечник', 'Magician', 60, 2, 30, 20));
// // console.log(characterAll.length);
// const team = new Team(characterAll);
// // console.log(team);
// for (const i of team) {
//   console.log(i);
// }
