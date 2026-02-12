import { text_slice_0 } from "../../../love/public/src/text_slice_0.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function string_skip_end(s, missing_count) {
  const from = text_size(s) - missing_count;
  const without = text_slice_0(s, from);
  return without;
}
