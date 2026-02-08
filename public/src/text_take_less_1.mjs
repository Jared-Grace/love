import { text_take } from "../../../love/public/src/text_take.mjs";
import { text_size_less_1 } from "../../../love/public/src/text_size_less_1.mjs";
export function text_take_less_1(s) {
  const sz1 = text_size_less_1(s);
  s = text_take(s, sz1);
  return s;
}
