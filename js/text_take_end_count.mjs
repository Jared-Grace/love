import { text_take_end_count_generic } from "./text_take_end_count_generic.mjs";
import { text_take } from "./text_take.mjs";
export function text_take_end_count(t, count) {
  let c = text_take_end_count_generic(t, count);
  let result = text_take(t, c);
  return result;
}
