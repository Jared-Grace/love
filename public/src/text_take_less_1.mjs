import { text_take } from "../../../love/public/src/text_take.mjs";
import { text_size_less_ } from "../../../love/public/src/text_size_less_1.mjs";
export function text_take_less_(s) {
  const sz = text_size_less_(s);
  s = text_take(s, sz);
  return s;
}
