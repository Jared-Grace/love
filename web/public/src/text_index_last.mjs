import { text_size } from "../../../love/public/src/text_size.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function text_index_last(s) {
  const index_last = subtract(text_size(s), 1);
  return index_last;
}
