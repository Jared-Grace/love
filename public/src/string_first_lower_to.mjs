import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_first_lower_to(s) {
  marker("1");
  let split = string_split_empty(s);
  let { first, remaining } = list_first_remaining(split);
  let lower = string_lower_to(first);
  let v = "" + lower + remaining;
  return v;
}
