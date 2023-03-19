export function discount(quantity) {
  if (quantity > 90) {
    return 20;
  }
  if (quantity > 50) {
    return 10;
  }
  if (quantity > 10) {
    return 5;
  }
  return 0;
}

export function reducedPrice(price, quantity) {
  let applieddiscount = discount(quantity);
  if (applieddiscount === 0) {
    return price;
  }
  let dprice = applieddiscount * Number(price);
  let lprice = dprice / 100;
  let finalprice = price - lprice;
  return finalprice;
}

export function totalAmount(price, quantity) {
  let finalPrice = reducedPrice(price, quantity);
  let amount = quantity * finalPrice;
  return amount;
}
