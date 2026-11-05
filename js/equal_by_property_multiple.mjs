import { equal_by_property } from "./equal_by_property.mjs";
export function equal_by_property_multiple(a, b, properties) {
  "Whether two objects hold the same value under every one of the properties.";
  function same(property) {
    let eq = equal_by_property(a, b, property);
    return eq;
  }
  let all = properties.every(same);
  return all;
}
