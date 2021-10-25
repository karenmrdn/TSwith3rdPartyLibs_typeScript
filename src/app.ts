import _ from "lodash";
import { Product } from "./product.model";
import { plainToClass } from "class-transformer";

console.log(_.shuffle([1, 2, 3]));

const products = [
  { title: "Carpet", price: 29.99 },
  { title: "Picture", price: 19.99 },
];

// const loadedProducts = products.map(
//   (prod) => new Product(prod.title, prod.price)
// );
// for (const prod of loadedProducts) {
//   console.log(prod.getInfo());
// }
// OR (with the help of the library)
const loadedProducts = plainToClass(Product, products);
for (const prod of loadedProducts) {
  console.log(prod.getInfo());
}
