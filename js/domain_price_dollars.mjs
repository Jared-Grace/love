import { divide } from "./divide.mjs";
import { not } from "./not.mjs";
export function domain_price_dollars(priced) {
  "A registrar's price said in dollars, or null when that kind of price is not offered for the name at all.";
  "PORKBUN WRITES EVERY PRICE IN CENTS. Read one straight and a nine dollar name reads as nine hundred.";
  if (not(priced)) {
    return null;
  }
  let top = Number(priced.price);
  let dollars = divide(top, 100);
  return dollars;
}
