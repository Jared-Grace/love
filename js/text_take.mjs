import { text_slice } from "./text_slice.mjs";
export function text_take(s, count) {
  let taken = text_slice(s, 0, count);
  return taken;
}
