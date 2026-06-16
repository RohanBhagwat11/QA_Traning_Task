// export interface Product { 
//   name: string; 
//   price: string; 
// } 
 
// export const products: Product[] = [ 
//   { 
//     name: 'Sauce Labs Backpack', 
//     price: '$29.99' 
//   }, 
//   { 
//     name: 'Sauce Labs Bike Light', 
//     price: '$9.99' 
//   },
//   {
//     name: 'Sauce Labs Bolt T-Shirt',
//     price: '15.99'
//   },
//   {
//     name: 'Sauce Labs Fleece Jacket',
//     price: '49.99'
//   }
// ]; 

export interface Product {
  name: string;

  //optional property(each product may or may not have a price)
  price?: string;
  expectedCartCount: number;
}

export const products: Product[] = [
  {
    name: "Sauce Labs Backpack",
    price: "$29.99",
    expectedCartCount: 1,
  },
  {
    name: "Sauce Labs Bike Light",
    price: "$9.99",
    expectedCartCount: 1,
  },
  {
    name: "Sauce Labs Bolt T-Shirt",
    price: "$15.99",
    expectedCartCount: 1,
  },
  {
    name: "Sauce Labs Fleece Jacket",
    price: "$49.99",
    expectedCartCount: 1,
  },
  {
    name: "Sauce Labs Onesie",
    price: "$7.99",
    expectedCartCount: 1,
  },
  {
    name: "Test.allTheThings() T-Shirt (Red)",
    price: "$15.99",
    expectedCartCount: 1,
  },
];
