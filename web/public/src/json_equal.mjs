import { json_to } from "../../../love/public/src/json_to.mjs";
import { equal_by } from "../../../love/public/src/equal_by.mjs";
export function json_equal(left, sliced) {
  let eq2 = equal_by(left, sliced, json_to);
  return eq2;
}
