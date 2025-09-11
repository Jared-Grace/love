import { string_slice } from "./string_slice.mjs";
export function string_take(href, count) {
  let v2 = string_slice(href, 0, count);
  return v2;
}
