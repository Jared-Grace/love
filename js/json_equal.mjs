import { json_to } from "./json_to.mjs";
import { equal_by } from "./equal_by.mjs";
export function json_equal(left, right) {
  let eq = equal_by(left, right, json_to);
  return eq;
}
