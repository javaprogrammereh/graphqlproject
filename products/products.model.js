const products = [
  {
    id: "redshow",
    description: "Red Shows",
    price: 30.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

getAllProducts = () => {
  return products;
};

getProductsByPrice = (min, max) => {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
};

getProductById = (id) => {
  return products.find((product) => {
    return product.id === id;
  });
};

addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};

addNewProductReview = (id, rating, comment) => {
  const matchedProduct = getProductById(id);
  if (matchedProduct) {
    const newProductReview = { rating, comment };
    matchedProduct.reviews.push(newProductReview);
    return newProductReview;
  }
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
