import { string_ends_with } from "../../../love/public/src/string_ends_with.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_ends_with_space(s) {
  marker("1");
  let sw2 = string_ends_with(s, " ");
  return sw2;
}
