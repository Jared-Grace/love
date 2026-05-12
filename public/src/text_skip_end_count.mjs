import { text_skip } from "../../../love/public/src/text_skip.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
import { take_end_count_generic } from "../../../love/public/src/take_end_count_generic.mjs";
export function text_skip_end_count(t, count) {
  let size_get = text_size;
  let c = take_end_count_generic(t, count, size_get);
  let result = text_skip(t, c);
  return result;
}
