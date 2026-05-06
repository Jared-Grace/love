import { text_skip } from "../../../love/public/src/text_skip.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
import { text_index_of } from "../../../love/public/src/text_index_of.mjs";
export function text_index_of_skip(value, item) {
  let index = text_index_of(value, item);
  let size = text_size(item);
  let sum = add(index, size);
  let skipped = text_skip(value, sum);
  return skipped;
}
