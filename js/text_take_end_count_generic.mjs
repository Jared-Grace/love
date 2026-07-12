import { take_end_count_generic } from "./take_end_count_generic.mjs";
import { text_size } from "./text_size.mjs";
export function text_take_end_count_generic(t, count) {
  let size_get = text_size;
  let c = take_end_count_generic(t, count, size_get);
  return c;
}
