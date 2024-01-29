export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amiString = whatsMyType<string>('Hello World');
const amiNumber = whatsMyType<number>(123);
const arrayNumber = whatsMyType<number[]>([1, 2, 3, 4]);

console.log(amiNumber);
console.log(amiString);
console.log(arrayNumber);
