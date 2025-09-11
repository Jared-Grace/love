import { string_slice } from "./string_slice.mjs";
export function string_take(href, count) {
  let taken = string_slice(href, 0, count);
  return taken;
}
