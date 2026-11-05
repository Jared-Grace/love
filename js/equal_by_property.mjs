import { property_get_curried_right } from "./property_get_curried_right.mjs";
import { equal_by } from "./equal_by.mjs";
export function equal_by_property(a, b, property) {
  "Whether two objects hold the same value under one property.";
  let value_get = property_get_curried_right(property);
  let eq = equal_by(a, b, value_get);
  return eq;
}
