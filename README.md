GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.
//*query test
// {
//   product(id:"bluejean"){
//       id
//       description
//        reviews{
//               comment
//               rating
//             }
//   }
//   productsByPrice(min:10,max:50){
//       id
//       description
//       price
//   }
//   orders {
//       date
//       subtotal
//       items 
//         {
//           product {
//             id
//             description
//             price
//             reviews{
//               comment
//               rating
//             }
//           }
//           quantity
//         }
//     }
  
// }
//*mutation test
// mutation{
//   addNewProduct(id:"orangejacket",description:"Orange Jacket",price:68.45){
//     id,
//     description,
//     price,
//     reviews{
//       rating
//     }
//   }
// }
//*
// mutation{
//   addNewProduct(id:"orangejacket",description:"Orange Jacket",price:68.45){
//     id,
//     description,
//     price,
//     reviews{
//       rating
//     }
//   }
//   addNewProductReview(id:"orangejacket",rating:4,comment:"review is"){
//     rating
//     comment
//   }
// }