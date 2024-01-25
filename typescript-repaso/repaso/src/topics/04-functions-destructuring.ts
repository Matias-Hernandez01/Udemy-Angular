interface Product {
  descriptions: string;
  price: number;
}
const phone: Product = {
  descriptions: 'Iphone',
  price: 200.0,
};

const notebook: Product = {
  descriptions: 'MacBook',
  price: 2600,
};

interface taxCalculationOptions {
  products: Product[];
  tax: number;
}

function taxtCalculations(options: taxCalculationOptions): number[] {
  let total = 0;

  options.products.forEach(({ price }) => (total += price));

  return [total, total * options.tax];
}

const shoppingCart = [phone, notebook];
const tax = 0.15;

const resultado = taxtCalculations({ products: shoppingCart, tax });

console.log(resultado);
