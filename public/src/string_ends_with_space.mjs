import { marker } from "./marker.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function string_ends_with_space(s) {
  marker("1");
  let sw2 = string_starts_with(s, " ");
  return sw2;
}
