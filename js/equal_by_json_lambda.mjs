import { json_to } from "./json_to.mjs";
import { equal_by } from "./equal_by.mjs";
export function equal_by_json_lambda(expected) {
  function lambda(item) {
    let eq = equal_by(item, expected, json_to);
    return eq;
  }
  return lambda;
}
