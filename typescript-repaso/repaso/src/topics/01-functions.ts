// function addNumber(a: number, b: number) {
// return a + b;
// }
// const results = addNumber(2, 3);
// console.log(results);

interface Character {
  name: string;
  pv: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  return (character.pv += amount);
};

const strider: Character = {
  name: 'Strider',
  pv: 50,
  showHp() {
    console.log('Puntos de vida' + this.pv);
  },
};

const results = healCharacter(strider, 60);

console.log(results);
