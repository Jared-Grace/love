import { string_take } from "../../../love/public/src/string_take.mjs";
import { text_size_less_1 } from "../../../love/public/src/text_size_less_1.mjs";
export function string_take_less_1(s) {
  const sz1 = text_size_less_1(s);
  s = string_take(s, sz1);
  return s;
}
