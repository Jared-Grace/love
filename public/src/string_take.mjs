import { string_slice } from "./string_slice.mjs";
export function string_take(s, count) {
  let taken = string_slice(s, 0, count);
  return taken;
}
