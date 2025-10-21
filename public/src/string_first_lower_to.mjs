import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_first_lower_to(s) {
  marker("1");
  let lower = string_lower_to(s);
  return lower;
}
