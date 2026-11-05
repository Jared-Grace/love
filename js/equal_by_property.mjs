import { property_get } from "./property_get.mjs";
import { equal_by } from "./equal_by.mjs";
export function equal_by_property(a, b, property) {
  "Whether two objects hold the same value under one property.";
  function value_get(item) {
    let value = property_get(item, property);
    return value;
  }
  let eq = equal_by(a, b, value_get);
  return eq;
}
