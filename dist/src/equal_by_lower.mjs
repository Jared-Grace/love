import { equal_by } from "../../../love/public/src/equal_by.mjs";
import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
export function equal_by_lower(a, b) {
  let eq = equal_by(a, b, text_lower_to);
  return eq;
}
