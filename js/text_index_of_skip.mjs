import { text_skip } from "./text_skip.mjs";
import { add } from "./add.mjs";
import { text_size } from "./text_size.mjs";
import { text_index_of } from "./text_index_of.mjs";
export function text_index_of_skip(value, item) {
  let index = text_index_of(value, item);
  let size = text_size(item);
  let sum = add(index, size);
  let skipped = text_skip(value, sum);
  return skipped;
}
