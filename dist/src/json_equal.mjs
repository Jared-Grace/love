import { json_to } from "../../../love/public/src/json_to.mjs";
import { equal_by } from "../../../love/public/src/equal_by.mjs";
export function json_equal(left, right) {
  let eq2 = equal_by(left, right, json_to);
  return eq2;
}
