import { text_slice_0 } from "../../../love/public/src/text_slice_0.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function string_skip_end(s, missing_count) {
  let from = subtract(text_size(s), missing_count);
  let without = text_slice_0(s, from);
  return without;
}
