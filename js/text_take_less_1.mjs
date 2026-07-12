import { text_take } from "./text_take.mjs";
import { text_size_less_1 } from "./text_size_less_1.mjs";
export function text_take_less_1(s) {
  let sz = text_size_less_1(s);
  s = text_take(s, sz);
  return s;
}
