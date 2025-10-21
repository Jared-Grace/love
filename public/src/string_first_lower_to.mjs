import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_first_lower_to(s) {
  marker("1");
  let result = list_first_remaining(list);
  let lower = string_lower_to(s);
  return lower;
}
