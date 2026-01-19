import { json_to } from "../../../love/public/src/json_to.mjs";
import { equal_by } from "../../../love/public/src/equal_by.mjs";
export function equal_by_json(expected) {
  function lambda() {
    let eq = equal_by(item, expected, json_to);
    return eq;
  }
  return lambda;
}
