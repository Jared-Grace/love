import { string_slice } from "../../../love/public/src/string_slice.mjs";
export function string_take(s, count) {
  let taken = string_slice(s, 0, count);
  return taken;
}
