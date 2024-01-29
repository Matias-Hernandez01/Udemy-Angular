export interface Passenger {
  name: string;
  children?: string[];
}

const passengerOne: Passenger = {
  name: 'Matias',
};

const passengerTwo = {
  name: 'Ramon',
  children: ['Abril', 'Isabel'],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length;

  return [passenger.name, howManyChildren];
};

const testing = printChildren(passengerTwo);
console.log(testing);
