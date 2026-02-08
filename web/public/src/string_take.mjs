import { text_slice } from "../../../love/public/src/text_slice.mjs";
export function string_take(s, count) {
  let taken = text_slice(s, 0, count);
  return taken;
}
