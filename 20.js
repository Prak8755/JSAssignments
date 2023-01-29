// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


//     - add 'Meat' in the beginning of your shopping cart if it has not been already added


       const shoppingCart=['Milk','Tea','Honey'];
      console.log(shoppingCart.unshift('Meat'));
      console.log(shoppingCart);


//     - add Sugar at the end of your shopping cart if it has not been already added
      const shoppingcart=['Milk','coffee','Tea','Honey'];
      console.log(shoppingcart.push('Sugar'));
       console.log(shoppingcart);

//     - remove 'Honey'

let cart=['Milk','Tea', 'coffee','Honey'];
let result=delete cart[2];
console.log(result);
console.log(cart);

//     - modify Tea to 'Green Tea'

const arr=['Milk','Tea','coffee','Honey'];
arr[1]='Green tea';
console.log(arr);

