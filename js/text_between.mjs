import { text_index_of_take } from "./text_index_of_take.mjs";
import { text_index_of_skip } from "./text_index_of_skip.mjs";
export function text_between(value, left, right) {
  let skipped = text_index_of_skip(value, left);
  let between = text_index_of_take(skipped, right);
  return between;
}
