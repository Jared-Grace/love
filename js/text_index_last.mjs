import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
export function text_index_last(s) {
  let index_last = subtract(text_size(s), 1);
  return index_last;
}
