export class Person {
  // public name: string;
  // public address: string;

  constructor(public name: string, public address: string = 'No contiene') {}
}

class Informacion {
  constructor(
    public colorFav: string,
    public age: number,
    public person: Person
  ) {}
}

const persona = new Person('Matias', 'Buenos Aires');
const detalle = new Informacion('Azul', 23, persona);

console.log(detalle);
