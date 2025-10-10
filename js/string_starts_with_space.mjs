import { marker } from "../../../love/public/src/marker.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
export function string_starts_with_space(s) {
  marker("1");
  let sw2 = string_starts_with(s, " ");
  return sw2;
}
