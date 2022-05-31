const orders = [
    {
      date: "2005-05-05",
      subtotal: 90.22,
      items: [
        {
          product: {
            id: "greenshow",
            description: "Green Shows",
            price: 3.12,
          },
          quantity: 2,
        }
      ]
    }
  ];
  getAllOrders=()=>{
    return orders;
  };

  module.exports={
    getAllOrders,
  };