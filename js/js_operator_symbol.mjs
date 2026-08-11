import { property_get } from "./property_get.mjs";
export function js_operator_symbol(operator) {
  "the symbol an operator is written with - what goes in its code tile. Every operator object carries its own symbol under the same key, so this is the one place that key is spelled, and a caller listing operators never has to hand-roll the lambda that reads it";
  let symbol = property_get(operator, "operator");
  return symbol;
}
