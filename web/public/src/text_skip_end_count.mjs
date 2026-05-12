import { text_take_end_count_generic } from "../../../love/public/src/text_take_end_count_generic.mjs";
import { text_skip } from "../../../love/public/src/text_skip.mjs";
export function text_skip_end_count(t, count) {
  let c = text_take_end_count_generic(t, count);
  let result = text_skip(t, c);
  return result;
}
