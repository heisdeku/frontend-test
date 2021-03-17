export const getProductTotal = (price, quantity) => {
  return price * quantity
}

export const getProductTotalWithTax = (price, quantity, tax) => {
  let taxValue = tax / 100
  let base = Math.round(getProductTotal(price, quantity) * taxValue)
  return Number(getProductTotal(price, quantity) + base)
}

export const getAllProductsTotal = (products) => {
  return products.reduce((initial, product) => initial + product.price, 0)
}
