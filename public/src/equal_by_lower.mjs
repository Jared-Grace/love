import { equal_by } from "../../../love/public/src/equal_by.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { string_lower_to } from "./string_lower_to.mjs";
export function equal_by_lower(a, b) {
  marker("1");
  let eq = equal_by(a, b, string_lower_to);
  return eq;
}
